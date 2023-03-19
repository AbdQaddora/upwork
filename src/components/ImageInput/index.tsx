import React, { useState, useCallback } from 'react'
import Style from './style'
import { useDropzone } from 'react-dropzone'

interface IProps {
    onChange: (image: string) => void,
    className?: string
}
const ImageInput = ({ onChange, className = "" }: IProps) => {
    const [image, setImage] = useState("");
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64 = reader.result;
            setImage(base64 as string);
            onChange(base64 as string);
        };

        reader.readAsDataURL(acceptedFiles[0]);
    }, [onChange]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <Style className={className}>
            {!image && <div className='upload_input' {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag and drop uploaded image, or click to select files</p>
                }
            </div>}
            {image && <img className='upload_image' src={image} alt="uploaded file" />}
        </Style>
    )
}

export default ImageInput