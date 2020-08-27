import React from "react";
import styled from "styled-components";
import classes from "./Testimonials.module.css";
import bos from "../Images/forJumbotron.svg";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Header = styled.strong`
  color: #181e2f;
  max-width: 1260px;
  @media (min-width: 991px) {
    font-size: 36px;
  }
  @media (max-width: 991px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const Testimonials = () => {
  return (
    <div className={classes.container}>
      <Title>
        <Header>Testimonials</Header>
        <img
          src={bos}
          alt="icon"
          style={{ width: "6vw", minWidth: "50px", marginTop: "8px" }}
        />
      </Title>
      <div className={classes.cards}>
        <div className={classes.card} href="#">
          <span
            className={classes.cardHeader}
            style={{
              backgroundImage:
                "url(data:image/jpeg;base64,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)",
            }}
          ></span>
          <span className={classes.cardSummary}>
            Being an artist, I often get requests for my paintings on short
            notice. Having them delivered in other cities is still being a
            challenge. Thank you Upstore for enabling my paintings to reach its
            rightful owners in Bangalore. It's been super helpful.
          </span>
          <div className={classes.author}>
            <div className={classes.Writer}>PALLAVI BHARGAVA</div>
            <div className={classes.Age}>28</div>
            <div className={classes.Location}>Bangalore</div>
          </div>
        </div>

        <div className={classes.card} href="#">
          <span
            className={classes.cardHeader}
            style={{
              backgroundImage: "url(http://placeimg.com/400/200/architecture)",
            }}
          ></span>
          <span className={classes.cardSummary}>
            Upstore has been extremely useful with reference to getting things
            done in an unknown city. Delhi is sometimes too cumbersome to deal
            with - Upstore makes this easier.
          </span>
          <div className={classes.author}>
            <div className={classes.Writer}>SURYA V</div>
            <div className={classes.Age}>26</div>
            <div className={classes.Location}>Delhi</div>
          </div>
        </div>

        <div className={classes.card} href="#">
          <span
            className={classes.cardHeader}
            style={{
              backgroundImage: "url(http://placeimg.com/400/200/tech)",
            }}
          ></span>
          <span className={classes.cardSummary}>
            Upstore has been extremely useful with reference to getting things
            done in an unknown city. Delhi is sometimes too cumbersome to deal
            with - Upstore makes this easier.
          </span>
          <div className={classes.author}>
            <div className={classes.Writer}>SURYA V</div>
            <div className={classes.Age}>26</div>
            <div className={classes.Location}>Delhi</div>
          </div>
        </div>

        <div className={classes.card} href="#">
          <span
            className={classes.cardHeader}
            style={{
              backgroundImage: "url(http://placeimg.com/400/200/animals)",
            }}
          ></span>
          <span className={classes.cardSummary}>
            Upstore has been extremely useful with reference to getting things
            done in an unknown city. Delhi is sometimes too cumbersome to deal
            with - Upstore makes this easier.
          </span>
          <div className={classes.author}>
            <div className={classes.Writer}>SURYA V</div>
            <div className={classes.Age}>26</div>
            <div className={classes.Location}>Delhi</div>
          </div>
        </div>

        <div className={classes.card} href="#">
          <span
            className={classes.cardHeader}
            style={{
              backgroundImage: "url(http://placeimg.com/400/200/people)",
            }}
          ></span>
          <span className={classes.cardSummary}>
            Upstore has been extremely useful with reference to getting things
            done in an unknown city. Delhi is sometimes too cumbersome to deal
            with - Upstore makes this easier.
          </span>
          <div className={classes.author}>
            <div className={classes.Writer}>SURYA V</div>
            <div className={classes.Age}>26</div>
            <div className={classes.Location}>Delhi</div>
          </div>
        </div>
        <div className={classes.card} href="#">
          <span
            className={classes.cardHeader}
            style={{
              backgroundImage: "url(http://placeimg.com/400/200/any)",
            }}
          ></span>
          <span className={classes.cardSummary}>
            Upstore has been extremely useful with reference to getting things
            done in an unknown city. Delhi is sometimes too cumbersome to deal
            with - Upstore makes this easier.
          </span>
          <div className={classes.author}>
            <div className={classes.Writer}>SURYA V</div>
            <div className={classes.Age}>26</div>
            <div className={classes.Location}>Delhi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
