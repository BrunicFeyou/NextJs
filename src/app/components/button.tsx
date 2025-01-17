"use client";

export default function Button () {

    const handleclick = () => {
        location.href = "google.com"
    }
    return (
        <div className="w-full flex justify-center">
            <button onClick={handleclick}  className="bg-pink-400 border-4 border-md border-yellow-200">
                Click me
            </button> 
        </div>
    )
}