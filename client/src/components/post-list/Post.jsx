import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image from '../../assets'
import { techOptions } from '../../utils/techOptions'
import Profile from '../profile/Profile'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Post = ({ id, title, projectName, status, logoUrl, coverImgUrl, stars, members, techs, tags, owner: ownerId }) => {
	const [owner, setOwner] = useState({})
	const [star, setStar] = useState(false);

	useEffect(() => {
		// Get owner
		axios.get(`http://127.0.0.1:3333/api/users/${ownerId}`)
			.then(res => res.data)
			.then(data => setOwner(data))
			.catch(err => console.log(err))

	}, [ownerId])

	return (
		<a href={'/posts/' + id}>
			<div style={{ '--image-url': `url(${coverImgUrl || image.defaultBg})` }} className={`bg-[image:var(--image-url)] bg-cover flex flex-col w-full rounded-xl items-start justify-between border `}>
				<div className="flex items-start justify-between w-full flex-col md:flex-row md:gap-16">
					{/* Project name */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mt-8 flex-shrink-0">
						<div className="flex items-center justify-center">
							<div className="w-16 h-16 rounded-full overflow-hidden border bg-white">
								<img src={logoUrl || "https://cdn4.iconfinder.com/data/icons/seo-outline-422/50/innovation-gear-lightbulb-idea-technology-512.png"} alt={"Project Logo"} className="w-full h-full object-cover" />
							</div>
						</div>
						<div className="flex flex-col items-start">
							<div className="flex flex-1 text-xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{projectName}</div>
							<div className="flex flex-1 text-white text-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{title}</div>
						</div>
					</div>

					{/* Project status */}
					<div className="flex flex-1 justify-start ml-8 mr-0 md:mr-8 md:ml-0 mt-8 gap-4">
						<div className="flex flex-col items-start">
							<div onClick={(e) => { e.preventDefault(); setStar(!star) }} className={`${star == true ? "text-yellow-400 border-yellow-400" : ""} flex items-center justify-center cursor-pointer bg-transparent rounded-2xl border border-white text-white px-4 py-1 mr-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex-nowrap whitespace-nowrap text-sm`}>
								{star == true ? (
									<AiFillStar className={`mr-1 scale-up-center`} />
								) : (
									<AiOutlineStar className={`mr-1`} />
								)}
								Star +{stars.length + star ? 1 : 0}
							</div>
						</div>
						<div className="flex flex-col items-start uppercase w-1/3">
							{/* <div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{status}</div> */}
							<div className={`${status == "ACTIVE" ? "text-green-400 border-green-400" : "text-neutral-400 border-neutral-400"} flex items-center justify-center cursor-pointer bg-transparent rounded-2xl border px-4 py-1 mr-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-sm`}>
								{status}
							</div>
						</div>
						<div className="flex flex-col items-start mr-12 uppercase">
							<div className="flex flex-1 items-center justify-start space-x-4">
								<div className="flex items-center justify-center">
									<div className="rounded-full overflow-hidden mr-1">
										<Profile id={ownerId} avatar_url={owner.avatarUrl} full_name={owner.fullname} />
									</div>
									{members.length > 0 && (
										<div className="overflow-hidden text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap">+ {members.length}</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-start items-start mt-4">
					{/* Project Techs */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-4">
						<div className="flex items-center justify-center">
							{techs?.slice(0, 3).map((tech, index) => {
								const techOption = techOptions.find(techOption => techOption.value === tech)
								return (
									<div key={index} className=" text-3xl rounded-full overflow-hidden mr-3">
										<FontAwesomeIcon key={index} icon={techOption?.icon} style={{color:techOption.color}} />
									</div>
								)
							})}
							{techs?.length > 3 && (
								<div className="overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">+ {techs?.length - 3}</div>
							)}
						</div>
					</div>

					{/* Project tags */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-8">
						<div className="flex items-center justify-center">
							{tags?.slice(0, 3).map((tag, index) => (
								<div key={index} className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border border-white text-sm">
									{tag}
								</div>
							))}
							{tags?.length > 3 && (
								<div className="overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">+ {tags?.length - 3}</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</a>
	)
}

export default Post
