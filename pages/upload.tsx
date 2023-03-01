import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";

import { client } from "../utils/client";

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoAsset, setVideoAsset] = useState();
  const [wrongFileType, setWrongFileType] = useState(false);

  const uploadVideo = async (e: any) => {
    const selectedFile = e.target.files[0];
    const fileTypes = ['/video/mp4', 'video/webm', 'video/ogg']

    if (fileTypes.includes(selectedFile.type)) {

    } else {
      setIsLoading(true)
      setWrongFileType(true)
    }
  }

  return (
    <div className="flex w-fulll h-full">
      <div className="bg-white rounded-lg">
        <div className="">
          <div className="">
            <p className="text-2xl font-bold">Upload Video</p>
            <p className="text-md text-gray-400 mt-1">
              Post a video to your account
            </p>
          </div>
          <div className="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100 ">
            {isLoading ? (
              <p>Uploading...</p>
            ) : (
              <div>
                {videoAsset ? (
                  <div></div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col items-center justify-center">
                        <p>
                          <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                        </p>
                        <p className="text-xl font-semibold">Upload Video</p>
                        <p className="text-sm text-center">
                          MP4 or WebM or ogg <br />
                          720x1280 or higher <br />
                          Up to 10 minutes <br />
                          Less than 2GB
                        </p>
                        <p className="bg-[#F51997] text-center mt-10 rounded text-white text-base font-medium p-2 w-52 outline-none">
                          Select File
                        </p>
                      </div>
                      <input
                        type="text"
                        name="upload-video"
                        className="w-0 h-0"
                        onChange={uploadVideo}
                      />
                    </div>
                  </label>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
