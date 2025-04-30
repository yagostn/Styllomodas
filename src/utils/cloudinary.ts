import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET
});

export const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'modish_store'); // Criar este preset no dashboard do Cloudinary

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    );

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error);
    throw error;
  }
};

export const optimizeImageUrl = (url: string, width: number = 800) => {
  // Verifica se é uma URL do Cloudinary
  if (url.includes('cloudinary')) {
    // Adiciona parâmetros de otimização
    return url.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`);
  }
  return url;
};