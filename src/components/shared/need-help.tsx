'use client'

const message = `Whether you have questions or need assistance with online booking procedures, our experts are just a call away. Reach out to us, and we'll ensure a smooth and hassle-free booking experience for you. Your satisfaction is our priority.`;

export default function NeedHelp() {

    return (
        <section className="container mx-auto px-4 py-4 md:py-8 mt-12 mb-8">
            <div className="w-full md:w-[50%] mx-auto"> {/* Added mx-auto to center */}
                <div className="flex flex-col gap-4 justify-center items-center">
                    <img src="/images/account/help_ques.svg" alt="Help" className="" />

                    <div className="text-[#000] text-center font-['Figtree'] text-[22px] md:text-[26px] font-semibold leading-normal">
                        Need help?
                    </div>

                    <p className="text-[#000] text-center font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[20px]">
                        {/* Whether you have questions or need assistance with online booking procedures, our experts are just a call away. Reach out to us, and we'll ensure a smooth and hassle-free booking experience for you. Your satisfaction is our priority. */}
                        {message}
                    </p>

                    <div className="text-black text-center font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal">
                        +91 78270-33601
                    </div>
                </div>
            </div>
        </section>
    )

}