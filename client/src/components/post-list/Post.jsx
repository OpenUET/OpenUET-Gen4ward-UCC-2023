import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image from '../../assets'
import { techOptions } from '../../utils/techOptions'
import Profile from '../profile/Profile'

const Post = ({ id, title, projectName, status, logoUrl, coverImgUrl, stars, members, techs, tags, owner: ownerId }) => {
	const [owner, setOwner] = useState({})

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
				<div className="flex items-start justify-between w-full flex-col md:flex-row">
					{/* Project name */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mt-8 flex-shrink-0">
						<div className="flex items-center justify-center">
							<div className="w-16 h-16 rounded-full overflow-hidden border">
								<img src={logoUrl || "https://cdn4.iconfinder.com/data/icons/seo-outline-422/50/innovation-gear-lightbulb-idea-technology-512.png"} alt={"Project Logo"} className="w-full h-full object-cover" />
							</div>
						</div>
						<div className="flex flex-col items-start">
							<div className="flex flex-1 text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{projectName}</div>
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{title}</div>
						</div>
					</div>

					{/* Project status */}
					<div className="flex flex-1 justify-center ml-8 mr-0 md:mr-8 md:ml-0 mt-8">
						<div className="flex flex-col items-start mr-12">
							<div className="flex flex-1 text-white uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Star</div>
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{stars.length}</div>
						</div>
						<div className="flex flex-col items-start mr-12 uppercase">
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Status</div>
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{status}</div>
						</div>
						<div className="flex flex-col items-start mr-12 uppercase">
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Members</div>
							<div className="flex flex-1 items-center justify-start space-x-4">
								<div className="flex items-center justify-center">
									<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
										<Profile id={ownerId} avatar_url={owner.avatarUrl} full_name={''} />
									</div>
									{members.slice(0, 3).map((member, index) => (
										<div key={index} className="w-6 h-6 rounded-full overflow-hidden mr-1">
											<Profile id={member.id} avatar_url={member.avatarUrl} full_name={member.name} />
										</div>
									))}
									{members.length > 3 && (
										<div className="overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">+ {members.length - 3}</div>
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
								<div key={index} className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
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
