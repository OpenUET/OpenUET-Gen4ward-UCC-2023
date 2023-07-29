import React from 'react'
import './PostDetail.css'
import { useState } from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";

const PostDetail = ({ title, projectName, createdAt, githubLink, content, status }) => {
	const [star, setStar] = useState(false);
	// const [status, setStatus] = useState("active");

	const handleClickStar = () => {
		setStar(!star);
	}

	const handleClickStatus = () => {
		if (status == "active") setStatus("archived");
		else setStatus("active");
	}

	return (
		<div className="bg-black-100 inline-flex items-start justify-center gap-3 flex-1 p-4 w-full">
			<div className="flex flex-col">
				{/* Project cover */}
				<div className="bg-[url('/images/Nachoneko.jpg')] bg-cover flex flex-col w-full h-[12.375rem] rounded-xl items-end justify-between mb-6">
					<div className="flex flex-1"></div>
					<div className="flex items-end justify-between w-full">
						{/* Project name */}
						<div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-8">
							<div className="flex items-center justify-center">
								<div className="w-16 h-16 rounded-full overflow-hidden">
									<img src={""} alt={""} className="w-full h-full object-cover" />
								</div>
							</div>
							<div className="flex flex-col items-start">
								<div className="flex flex-1 text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{projectName}</div>
								<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{title}</div>
							</div>
						</div>

						{/* Project status */}
						<div className="flex flex-1 justify-center mr-8 mb-8">
							<div className="flex flex-col items-start mr-12">
								<div className="flex flex-1 font-bold text-white uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Star</div>
								<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">100</div>
							</div>
							<div onClick={() => handleClickStatus()} className="flex flex-col items-start mr-12 uppercase">
								<div className="flex flex-1 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Status</div>
								<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{status}</div>
							</div>
							<div className="flex flex-col items-start mr-12 uppercase">
								<div className="flex flex-1 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Tracked Time</div>
								<div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">10h 20m</div>
							</div>
						</div>
					</div>
				</div>

				{/* Project information */}
				<div className="flex justify-center text-white w-full h-auto ml-4">
					<div className="inline-flex flex-1 flex-col items-center justify-center">
						<div className="flex items-center justify-start w-full mb-4">
							<div className="flex w-1/4">Created at</div>
							<div className="flex">{createdAt}</div>
						</div>

						<div className="flex items-center justify-start w-full mb-4">
							<div className="flex w-1/4">Tech Stack</div>
							<div className="flex items-center justify-start space-x-4">
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
									<div className="overflow-hidden text-white text-right">+3</div>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-start w-full mb-4">
							<div className="flex w-1/4">Tags</div>
							<div className="flex items-center justify-start">
								<div className="flex items-center justify-center">
									<div className="whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
										Profitable
									</div>
									<div className="whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
										AI
									</div>
									<div className="whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
										1 Person
									</div>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-start w-full mb-4">
							<div className="flex w-1/4">License</div>
							<div className="flex">MIT</div>
						</div>

						<div className="flex items-center justify-start w-full mb-4">
							<div className="flex w-1/4">Object</div>
							<div className="flex">OOP</div>
						</div>
					</div>

					<div className="flex flex-1 flex-col items-start justify-start text-white mr-4">
						<div className="flex w-full">Description</div>
						<div className="flex w-full">Lorem Ipsum dolor si amet</div>
					</div>
				</div>

				{/* Project detail */}
				<div className="flex flex-col border-t-[1px] border-neutral-700 mt-8">
					<div className="flex w-full">
						<div className="flex flex-1 mt-8 text-white text-xl font-bold">{projectName}</div>
						<div className="flex flex-1 items-end justify-end w-full">
							<div className="flex items-center justify-center cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1 mr-2">
								<FaPencilAlt className="mr-1" />
								Edit
							</div>
							<div onClick={() => handleClickStar()} className={`${star == true ? "text-yellow-400 border-yellow-400" : ""} flex items-center justify-center cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1 mr-2`}>
								{star == true ? (
									<AiFillStar className={`mr-1 scale-up-center`} />
								) : (
									<AiOutlineStar className={`mr-1`} />
								)}
								Star
							</div>
							{status == "ARCHIVED" ? (
								<div className="flex cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1 mr-2">Fork</div>
							) : (
								<></>
							)}
							<div className="flex cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1"><a href={githubLink}>Visit Github</a></div>
						</div>
					</div>
					<div className="flex flex-col w-full mt-8 text-white">
						{content}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PostDetail
