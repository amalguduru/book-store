function Contact() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              <h3 className="font-bold text-4xl">Contact Us</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-1 rounded-md outline-none"
                />
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 py-1 rounded-md outline-none"
                />
                <br />
              </div>

              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  className="w-full textarea-bordered h-36 rounded-md px-3 py-1 outline-none"
                  placeholder="Type your message"
                ></textarea>
              </div>

              <div className="justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
