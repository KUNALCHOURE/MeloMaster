"use client";
import React, { ReactElement, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Alert } from "@mui/material";

export default function Page() {
  const [showAlert, setShowAlert] = useState(false);
 
  const handleClick = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Show the alert
    setShowAlert(true);

    // Hide the alert after 3 seconds (adjust time as needed)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    window.location.reload();
  };

  return (
    <div className="h-screen flex justify-center items-center mb-5">
      <div className="mt-20 flex flex-col justify-center items-center">
        <p className="text-8xl mb-10 mt-24">Contact us</p>
        <p className="text-center text-xl mb-10">
          We&apos;re here to help with any question about our courses programs, or events. 
          Reach out and let us know how we can assist you in your musical journey.
        </p>

        {/* Show alert with fade effect */}
        {showAlert && (
          <Alert
            variant="filled"
            severity="success"
            sx={{
              marginBottom: '20px',
              opacity: 0, // Initially invisible
              animation: 'fadeIn 1s forwards', // Animation for fade-in effect
            }}
          >
            Thanks for contacting us! We appreciate your interest and will respond to you soon
          </Alert>
        )}

        <form action="" className="mt-5 flex flex-col gap-10" onSubmit={handleClick}>
          <TextField
            id="outlined-basic"
            label="Your Email address"
            variant="outlined"
            required
             type="email"
            className="rounded-xl bg-cyan-800"
            sx={{ width: '500px' }}
          />
          <TextField
            id="outlined-basic"
            label="Your Message"
            variant="outlined"
            required
            className="rounded-xl bg-cyan-800"
            sx={{
              width: '500px',
              "& .MuiInputBase-root": { height: '200px' },
            }}
          />
          <div className="text-center">
            <Button
            type="submit"
              variant="contained"
              color="success"
              sx={{
                width: 'auto', // Ensure width adjusts naturally to content
                minWidth: '50px', // Prevent any default minimum width
              }}
              
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>

      {/* Add keyframe animation for fade-in and fade-out */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
