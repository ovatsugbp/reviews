import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNum = (number) => {
        if (number > people.length - 1) return 0;

        if (number < 0) return people.length - 1;

        return number;
    };

    const nextButton = () => {
        setIndex((ccIndex) => {
            let newIndex = ccIndex + 1;

            return checkNum(newIndex);
        });
    };
    const prevButton = () => {
        setIndex((ccIndex) => {
            let newIndex = ccIndex - 1;

            return checkNum(newIndex);
        });
    };

    const randomNum = () => {
        let newRandom = Math.floor(Math.random() * people.length);

        if (newRandom === index) {
            newRandom = index + 1;
        }
        setIndex(checkNum(newRandom));
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevButton}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextButton}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomNum}>
                surprise me
            </button>
        </article>
    );
};

export default Review;
