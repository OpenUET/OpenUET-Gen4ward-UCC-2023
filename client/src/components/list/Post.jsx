import React from 'react'
import Profile from '../profile/Profile'

const Post = ({ id, title, projectName, status, logoUrl, coverImgUrl, stars, members, techs, tags = [''] }) => {
	return (
		<a href={'/posts/' + id} className="w-full">
			<div className={`bg-[url('${coverImgUrl || '/images/Nachoneko.jpg'}')] bg-cover flex flex-col w-full rounded-xl items-start justify-between`}>
				<div className="flex items-start justify-between w-full flex-col md:flex-row">
					{/* Project name */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mt-8 flex-shrink-0">
						<div className="flex items-center justify-center">
							<div className="w-16 h-16 rounded-full overflow-hidden">
								<img src={logoUrl} alt={"Project Logo"} className="w-full h-full object-cover" />
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
									{members.slice(0, 3).map(member => (
										<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
											<Profile id={member.id} avatar_url={member.avatar_url} full_name={member.name} />
										</div>
									))}
									<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
										<Profile />
									</div>
									<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
										<Profile />
									</div>
									<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
										<Profile />
									</div>
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
							{techs?.slice(0, 3).map(tech => (
								<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
									<img src={tech.logoUrl} alt={tech.name} className="w-full h-full object-cover" />
								</div>
							))}
							<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
								<img src={""} alt={""} className="w-full h-full object-cover" />
							</div>
							<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
								<img src={""} alt={""} className="w-full h-full object-cover" />
							</div>
							<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
								<img src={""} alt={""} className="w-full h-full object-cover" />
							</div>
							{techs?.length > 3 && (
								<div className="overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">+ {techs?.length - 3}</div>
							)}
						</div>
					</div>

					{/* Project tags */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-8">
						<div className="flex items-center justify-center">
							{tags?.slice(0, 3).map(tag => (
								<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
									{tag}
								</div>
							))}
							<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
								Profitable
							</div>
							<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
								AI
							</div>
							<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
								1 Person
							</div>
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
