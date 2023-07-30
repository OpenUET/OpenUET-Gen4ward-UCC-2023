const CLOUDINARY_PRESET_NAME = 'inuv3mia'
const CLOUDINARY_CLOUD_NAME = 'dtbvalhlc'

const uploadImage = async (file) => {
  if (!file) return null;
  
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_PRESET_NAME);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    })
    return response.json();
  } catch (error) {
    return error;
  }
}

export { uploadImage }