import Title from "../../section/Title";
import Content from "../../section/Content";
import { useEffect } from "react";
import aosAnimate from "../../utils/aosAnimate";

export default function Summary({ handleSeeFull, isSeeFull }) {
    useEffect(() => {
        aosAnimate(".about");
    });

    return (
        <div className="mb-4">
            <Title mb={4}>Summary</Title>
            <Content isSummary={true}>
                I am a software/frontend developer with experients +10 months
                and a fresh graduate from Politeknik Negeri Jakarta in
                Electrical Engineering major last year. My last work experience
                is as a Frontend Developer in LingoTalk which education
                technology startup that focuses on foreign language learning for
                elementary school students.{" "}
                {!isSeeFull && (
                    <span
                        className="cursor-pointer hover:underline underline-offset-2 text-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
                        onClick={handleSeeFull}
                    >
                        See More
                    </span>
                )}
                <span
                    className={`${
                        isSeeFull
                            ? "h-max visible opacity-100"
                            : "h-0 hidden opacity-0"
                    }`}
                >
                    Currently, I also learn in online classes named Dicoding
                    Academy to deepen my knowledge of web development roadmap. I
                    have a mission to be great in my field so that I can share
                    knowledge more widely.
                </span>
            </Content>
            <Content
                style={{
                    opacity: isSeeFull ? 1 : 0,
                    visibility: isSeeFull ? "visible" : "hidden",
                    height: isSeeFull ? "max-content" : "0",
                }}
                isSummary={true}
            >
                I am very passionate about technology and computers. I am
                reliable, can work in a team, and can learn quickly my interests
                are in frontend development. In my free time, I keep up with the
                news of computer technology, play games, and read books.{" "}
                <span
                    className="cursor-pointer text-sky-500 hover:underline underline-offset-2 hover:text-sky-600 dark:hover:text-sky-400"
                    onClick={handleSeeFull}
                >
                    See Less
                </span>
            </Content>
        </div>
    );
}
