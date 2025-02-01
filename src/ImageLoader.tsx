import React, { useState } from 'react';


interface IImageLoaderProps {
}

const ImageLoader: React.FunctionComponent<IImageLoaderProps> = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [isValidUrl, setIsValidUrl] = useState<boolean>(true);
  
    const validateImageUrl = (url: string): boolean => {
      try {
        new URL(url); 
        return true;
      } catch (error) {
        return false;
      }
    };
  

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const url = e.target.value;
      setImageUrl(url);
      setIsValidUrl(validateImageUrl(url));
    };

return(
     <>
     <div style={{ margin: '20px', }}>
      <h2>Input an image URL for uploading</h2>
      <input
        type="text"
        className='form-control'
        value={imageUrl}
        onChange={handleInputChange}
        placeholder="Image URL..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: `2px solid ${isValidUrl ? '#ccc' : 'red'}`,
        }}
      />
      {!isValidUrl && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          Input valid image URL (support .jpg, .jpeg, .png, .gif, .webp).
        </p>
      )}
      {isValidUrl && imageUrl ? (
        <img
          src={imageUrl}
          alt="Uploaded image"
          className='w-100 mt-4 rounded'
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            setIsValidUrl(false);
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            marginTop: '20px',
          }}
        >
          <span style={{ color: '#666' }}>The image has not been uploaded</span>
        </div>
      )}
      <button
       type="button" className="btn btn-primary"
        onClick={() => {
          setImageUrl('');
          setIsValidUrl(true);
        }}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Reset
      </button>
    </div>
     </>
);
}
export default ImageLoader;