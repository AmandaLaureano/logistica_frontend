'use client'
import { toast } from 'react-toastify'
import React from 'react'

export function ToastErrorMessage({ text, duration}) {
    const parts = text?.split(/\*(.*?)\*/);
    const handleClick = () => {
      typeof onClick == 'function' && onClick();
    };
    if (!toast.isActive(text)) {
      return toast.error(
        <div onClick={handleClick}>
          {parts?.map((part, index) => (
            <React.Fragment key={index}>
              {index % 2 === 1 ? (
                <strong className="font-semibold uppercase text-red">{part}</strong>
              ) : part.includes('\\n') ? (
                part.split('\\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))
              ) : (
                part
              )}
            </React.Fragment>
          ))}
        </div>,
        {
          toastId: text,
          autoClose: duration <= 0 ? false : duration,
          className: 'shadow-md shadow-red mx-5',
        }
      );
    }
  }