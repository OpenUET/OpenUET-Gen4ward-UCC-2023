import React from 'react'

const Post = ({ id }) => {
	return (
		<a href={'/posts/' + id} className="w-full">
			<div className="bg-[url('/images/Nachoneko.jpg')] bg-cover flex flex-col w-full h-[12.375rem] rounded-xl items-start justify-between">
				<div className="flex items-start justify-between w-full">
					{/* Project name */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mt-8">
						<div className="flex items-center justify-center">
							<div className="w-16 h-16 rounded-full overflow-hidden">
								<img src={""} alt={""} className="w-full h-full object-cover" />
							</div>
						</div>
						<div className="flex flex-col items-start">
							<div className="flex flex-1 text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">OpenUET</div>
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Project Title</div>
						</div>
					</div>

					{/* Project status */}
					<div className="flex flex-1 justify-center ml-8 mr-0 md:mr-8 md:ml-0 mt-8">
						<div className="flex flex-col items-start mr-12">
							<div className="flex flex-1 text-white uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Star</div>
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">100</div>
						</div>
						<div className="flex flex-col items-start mr-12 uppercase">
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Status</div>
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Active</div>
						</div>
						<div className="flex flex-col items-start mr-12 uppercase">
							<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Members</div>
							<div className="flex flex-1 items-center justify-start space-x-4">
								<div className="flex items-center justify-center">
									<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
										<img src={""} alt={""} className="w-full h-full object-cover" />
									</div>
									<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
										<img src={""} alt={""} className="w-full h-full object-cover" />
									</div>
									<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
										<img src={""} alt={""} className="w-full h-full object-cover" />
									</div>
									<div className="overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">+3</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-start items-start mt-4">
					{/* Project Techs */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-4">
						<div className="flex items-center justify-center">
							<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
								<img src={""} alt={""} className="w-full h-full object-cover" />
							</div>
							<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
								<img src={""} alt={""} className="w-full h-full object-cover" />
							</div>
							<div className="w-6 h-6 rounded-full overflow-hidden mr-1">
								<img src={""} alt={""} className="w-full h-full object-cover" />
							</div>
							<div className="overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">+3</div>
						</div>
					</div>

					{/* Project tags */}
					<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-8">
						<div className="flex items-center justify-center">
							<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
								Profitable
							</div>
							<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
								AI
							</div>
							<div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
								1 Person
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	)
}

export default Post
