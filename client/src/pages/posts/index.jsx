import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import ListingRequests from "../../components/member-list/ListingRequests";
import MembersInfo from "../../components/member-list/MembersInfo";
import MembersMenu from "../../components/member-list/MembersMenu";
import OwnerInfo from "../../components/member-list/OwnerInfo";
import NavBar from '../../components/nav/NavBar';
import PostDetail from "../../components/post/PostDetail";
import { selectUser } from "../../redux/slices/authSlice";
import './Posts.css';

export default function Posts() {
  const location = useLocation();
  const [post, setPost] = useState({})
  const [team, setTeam] = useState({})
  const [requests, setRequests] = useState([
    {
      id: 2,
      avatarUrl: '/images/placeholder.jpg',
      fullname: 'Nguyễn Văn B',
      description: 'Consectetur adipiscing elit.'
    },
    {
      id: 3,
      avatarUrl: '/images/placeholder.jpg',
      fullname: 'Nguyễn Văn C',
      description: 'Lorem ipsum dolor sit amet.'
    }
  ])

  const { isLoggedIn, userInfo } = useSelector(selectUser)

  useEffect(() => {
    const id = location.pathname.split('/')[2];

    fetch('http://127.0.0.1:3333/api/posts/' + id)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => {
        setPost(data)
      })

    fetch('http://127.0.0.1:3333/api/teams/' + id)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => {
        setTeam(data)
      })
  }, [])

  const requestActions = (id, action) => {
    if (action === 'accept') {
      setRequests(requests.filter(request => request.id !== id))
      setTeam({
        ...team,
        members: [
          ...team.members,
          requests.find(request => request.id === id)
        ]
      })
    } else {
      setRequests(requests.filter(request => request.id !== id))
    }
  }

  return (
    <>
      <Toaster />
      <NavBar />
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="pt-28 flex gap-6">
          <div className="flex-1 relative">
            <PostDetail
              title={post.title}
              projectName={post.projectName}
              createdAt={post.createdAt}
              githubLink={post.githubLink}
              content={post.content}
              status={post.status}
              logoUrl={post.logo_url}
              stars={post.stars}
              tags={post.tags}
              description={post.description}
              subjectId={post.subject_id}
              coverImgUrl={post.cover_img_url}
              techs={post.techs}
            />
          </div>

          <div className="w-[30%] flex flex-col gap-4">
            <OwnerInfo userData={team.owner} />
            <div className="relative">
              <MembersInfo userData={team.members} />
              {userInfo?._id === team?.owner?._id && (
                <MembersMenu />
              )}
            </div>
            {userInfo?._id === team?.owner?._id && (
              <ListingRequests onSubmit={requestActions} requests={requests}/>
            )}
          </div>
        </div>
      </div>
    </>
  )
}