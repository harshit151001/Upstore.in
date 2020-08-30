import React from 'react';
import styled from 'styled-components';
import classes from './Testimonials.module.css';
import bos from '../Images/forJumbotron.svg';

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Header = styled.strong`
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
          style={{ width: '6vw', minWidth: '50px', marginTop: '8px' }}
        />
      </Title>
      <div className={classes.cards}>
        <div className={classes.card} href="#">
          <span
            className={classes.cardHeader}
            style={{
              backgroundImage: 'url(http://placeimg.com/400/200/girl)',
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
              backgroundImage: 'url(http://placeimg.com/400/200/architecture)',
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
              backgroundImage: 'url(http://placeimg.com/400/200/tech)',
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
              backgroundImage: 'url(http://placeimg.com/400/200/animals)',
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
              backgroundImage: 'url(http://placeimg.com/400/200/people)',
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
              backgroundImage: 'url(http://placeimg.com/400/200/any)',
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
