import React from "react";
import styled from "styled-components";

const languages = [{ name: "English" }, { name: "Hindi" }, { name: "Telugu" }];

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/62afc8c2c11b6c37fd158304dc69d809676426786920e92e52e28467a0ba940f?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    alt: "Social Icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1337fa5dfaeaea67c77c47fad31fc31039647c3a09e6edfe5df6748653305e?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    alt: "Social Icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a3fb9640681fea5870c53e2379800af2a95c7b89d0902ece20116d45aeedea?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    alt: "Social Icon 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/18b2302981bf5160c3d8fcb37ea11c4aebbbbc790ab978932cc1aa0873936b19?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    alt: "Social Icon 4",
  },
];

function DoctorProfile() {
  return (
    <ProfileCard>
      <ProfileHeader>
        <ProfileTitle>A Little About me</ProfileTitle>
        <FollowButton>
          <FollowText>Follow</FollowText>
          <FollowIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b310f29ac7c39aae825140b828d3cdd16acc1abe262a9c9c6255a8ec3afe5d93?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
            alt="Follow Icon"
          />
        </FollowButton>
      </ProfileHeader>
      <ProfileContent>
        <ProfileDescription>
          <p>
            Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
            Surat. love to work with all my hospital staff and senior doctors.
            Completed my graduation in Gynaecologist Medicine from the{" "}
          </p>
          <ReadMoreLink>
            <ReadMoreIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0038dfcbad1eacf6db886b52c6662dab095beda624bdb1b05eca08e690cccfa?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
              alt="Read More Icon"
            />
            <ReadMoreText>Read More</ReadMoreText>
          </ReadMoreLink>
        </ProfileDescription>
        <LanguageSection>
          <LanguageTitle>Language Spoken</LanguageTitle>
          {languages.map((language, index) => (
            <Language key={index}>{language.name}</Language>
          ))}
        </LanguageSection>
        <SocialIcons>
          {socialIcons.map((icon, index) => (
            <SocialIconWrapper key={index}>
              <SocialIcon src={icon.src} alt={icon.alt} />
            </SocialIconWrapper>
          ))}
        </SocialIcons>
      </ProfileContent>
    </ProfileCard>
  );
}

const ProfileCard = styled.article`
  border-radius: 18px;
  border: 1px solid rgba(220, 220, 220, 1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2px 0 33px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProfileHeader = styled.header`
  justify-content: center;
  border-radius: 15px 18px 0px 0px;
  background: linear-gradient(270deg, #fbfcfb 0.05%, #f4f7ec 99.98%);
  display: flex;
  gap: 20px;
  padding: 13px 38px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const ProfileTitle = styled.h2`
  color: #313131;
  flex-grow: 1;
  margin: auto 0;
  font: 600 24px Nunito, sans-serif;
`;

const FollowButton = styled.button`
  border-radius: 10px;
  border: 1px solid rgba(58, 100, 59, 1);
  background-color: #fff;
  display: flex;
  gap: 7px;
  font-size: 16px;
  color: #585858;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  line-height: 150%;
  justify-content: center;
  padding: 6px 21px;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const FollowText = styled.span`
  font-family: Poppins, sans-serif;
`;

const FollowIcon = styled.img`
  width: 14px;
  margin: auto 0;
`;

const ProfileContent = styled.section`
  display: flex;
  margin-top: 27px;
  flex-direction: column;
  padding: 0 41px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 991px) {
    max-width: 100%;
  }

  p {
    color: rgba(51, 53, 72, 0.5);
    font-family: Poppins, sans-serif;
    line-height: 27px;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
`;

const ReadMoreLink = styled.a`
  display: flex;
  margin-top: 6px;
  gap: 10px;
  color: #2b2b2b;
  line-height: 169%;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const ReadMoreIcon = styled.img`
  width: 80%;
  height: 0px;
  stroke-width: 0.5px;
  stroke: #797979;
  border: 1px solid rgba(121, 121, 121, 1);
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ReadMoreText = styled.span`
  font-family: Poppins, sans-serif;
  text-decoration: underline;
`;

const LanguageSection = styled.div`
  display: flex;
  margin-top: 33px;
  padding-right: 56px;
  gap: 15px;
  font-size: 20px;
  color: #505050;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 100%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const LanguageTitle = styled.h3`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Nunito, sans-serif;
  margin: auto 0;
`;

const Language = styled.span`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Nunito, sans-serif;
  justify-content: center;
  border-radius: 16px;
  background-color: rgba(46, 55, 164, 0.04);
  padding: 7px 9px;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SocialIcons = styled.div`
  align-self: start;
  display: flex;
  margin-top: 39px;
  gap: 15px;
  padding: 0 1px;
`;

const SocialIconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f7f7fc;
`;

function ConcernItem({ text }) {
  return <div className="concern-item">{text}</div>;
}

function Concern() {
  const concerns = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
    "+ 5 More",
  ];

  return (
    <>
      <style jsx>{`
        .concerns-container {
          border-radius: 18px;
          border: 1px solid rgba(220, 220, 220, 1);
          background-color: #fff;
          display: flex;
          margin-top: 29px;
          flex-direction: column;
          padding: 2px 0 31px;
        }

        @media (max-width: 991px) {
          .concerns-container {
            max-width: 100%;
          }
        }

        .concerns-title {
          align-items: start;
          border-radius: 15px 18px 0px 0px;
          background: linear-gradient(
            90deg,
            #f4f7ec 0%,
            #f4f7ec 0.01%,
            #fdfdfd 100%
          );
          color: #313131;
          justify-content: center;
          padding: 15px 27px;
          font: 600 24px Nunito, sans-serif;
          margin-top: -1px;
        }

        @media (max-width: 991px) {
          .concerns-title {
            max-width: 100%;
            padding: 0 20px;
          }
        }

        .concerns-list {
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          font-size: 16px;
          color: #3a643b;
          font-weight: 500;
          line-height: 112.5%;
          padding: 0 27px;
        }

        @media (max-width: 991px) {
          .concerns-list {
            max-width: 100%;
            padding: 0 20px;
          }
        }

        .concerns-row {
          display: flex;
          align-items: start;
          gap: 10px;
          padding: 0 1px;
        }

        @media (max-width: 991px) {
          .concerns-row {
            flex-wrap: wrap;
          }
        }

        .concern-item {
          font-family: Poppins, sans-serif;
          justify-content: center;
          border-radius: 18px;
          background-color: #f7f7fc;
          padding: 10px;
          margin-top: 11px;
          :hover {
            cursor: pointer;
          }
        }

        .more-concerns {
          font-family: Poppins, sans-serif;
          justify-content: center;
          border-radius: 18px;
          border: 1px solid rgba(224, 223, 223, 1);
          background-color: rgba(247, 247, 252, 0);
          padding: 10px;
          margin-top: 11px;
          :hover {
            cursor: pointer;
          }
        }

        @media (max-width: 991px) {
          .more-concerns {
            padding: 0 20px;
          }
        }
      `}</style>

      <section className="concerns-container">
        <h2 className="concerns-title">The Concerns I Treat</h2>
        <div className="concerns-list">
          <div className="concerns-row">
            {concerns.slice(0, 4).map((concern, index) => (
              <ConcernItem key={index} text={concern} />
            ))}
          </div>
          <div className="concerns-row">
            {concerns.slice(4, 6).map((concern, index) => (
              <ConcernItem key={index} text={concern} />
            ))}
            <div className="more-concerns">{concerns[6]}</div>
          </div>
        </div>
      </section>
    </>
  );
}

const ExperienceItem = ({ logo, title, position, duration }) => (
  <div className="experience-item">
    <div className="logo-container">
      <img src={logo} alt={`${title} logo`} className="logo" />
    </div>
    <div className="details">
      <div className="title-position">
        <h3 className="title">{title}</h3>
        <p className="position">{position}</p>
      </div>
      <p className="duration">{duration}</p>
    </div>
  </div>
);

const experiences = [
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/50b949ac133e064a0ecf6be26b7bf5f43154bfbdacd9a3e489da79cb2fa8f364?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    title: "Midtown Medical Clinic",
    position: "Senior doctor",
    duration: "2016- present",
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/50b949ac133e064a0ecf6be26b7bf5f43154bfbdacd9a3e489da79cb2fa8f364?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    title: "Midtown Medical Clinic",
    position: "Senior doctor",
    duration: "2010-2015",
  },
];

function Work() {
  return (
    <>
      <section className="experience-section">
        <header className="section-header">
          <h2>My Work Experience</h2>
        </header>
        <div className="experience-content">
          <p className="years-in-practice">
            I have been in practice for : 7+ Years
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c878f1c77c5c1de307070978935316b50506c7cd5ea55bd94ed5e1c58281861?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
            alt="Experience timeline"
            className="timeline-image"
          />
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </section>

      <style jsx>{`
        .experience-section {
          border-radius: 18px;
          border: 1px solid rgba(220, 220, 220, 1);
          background-color: #fff;
          display: flex;
          margin-top: 27px;
          flex-direction: column;
          padding: 2px 0 42px;
        }

        @media (max-width: 991px) {
          .experience-section {
            max-width: 100%;
          }
        }

        .section-header {
          align-items: start;
          border-radius: 15px 18px 0px 0px;
          background: linear-gradient(90deg, #f4f7ec 0%, #fcfcfc 100%);
          color: #313131;
          justify-content: center;
          padding: 0px 31px;
          font: 509 16px Nunito, sans-serif;
        }

        @media (max-width: 991px) {
          .section-header {
            max-width: 100%;
            padding: 0 20px;
          }
        }

        .experience-content {
          display: flex;
          width: 480px;
          max-width: 100%;
          flex-direction: column;
          margin: 37px 0 0 24px;
        }

        .years-in-practice {
          justify-content: center;
          color: #3a643b;
          text-transform: uppercase;
          font: 600 18px/107% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .years-in-practice {
            max-width: 100%;
          }
        }

        .timeline-image {
          height: 0px;
          object-fit: auto;
          object-position: center;
          width: 422px;
          stroke-width: 1px;
          stroke: #d1d5d1;
          border: 1px solid rgba(209, 213, 209, 1);
          margin-top: 29px;
          max-width: 100%;
        }

        .experience-item {
          display: flex;
          margin-top: 21px;
          gap: 10px;
        }

        @media (max-width: 991px) {
          .experience-item {
            flex-wrap: wrap;
          }
        }

        .logo-container {
          align-items: center;
          border-radius: 6px;
          background-color: #f7f7fc;
          align-self: start;
          display: flex;
          justify-content: center;
          width: 48px;
          height: 48px;
          padding: 12px;
        }

        .logo {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }

        .details {
          justify-content: center;
          display: flex;
          gap: 20px;
          font-size: 16px;
          font-weight: 500;
        }

        .title-position {
          display: flex;
          flex-direction: column;
          line-height: 131%;
        }

        .title {
          color: #333548;
          font-family: Poppins, sans-serif;
          margin: 0;
        }

        .position {
          color: rgba(51, 53, 72, 0.5);
          font-family: Poppins, sans-serif;
          margin: 9px 0 0;
        }

        .duration {
          color: rgba(51, 53, 72, 0.71);
          font-family: Poppins, sans-serif;
          line-height: 21px;
          text-transform: uppercase;
          align-self: start;
          margin: 0;
        }
      `}</style>
    </>
  );
}

const reviews = [
  {
    id: 1,
    name: "Alicent Hightower",
    consultedFor: "Skin care",
    date: "20 January 2023",
    rating: 5,
    reviewText:
      "Might be a bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
  },
  {
    id: 2,
    name: "Alicent Hightower",
    consultedFor: "Pregnancy",
    date: "20 January 2023",
    rating: 5,
    reviewText:
      "Might be a bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods",
  },
];
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <img
        key={i}
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91c20bb75e95dfeba06150f0640aa85d378c552f9555c8a1e7ed868c5b7e9a34?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
        alt="star icon"
        className="star-icon"
      />
    );
  }
  return <div className="star-rating">{stars}</div>;
};
const ReviewCard = ({ review }) => {
  return (
    <article className="review-card">
      <header className="review-header">
        <div className="reviewer-info">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b622b8ce0aac88d5d912ca0b42406d437b7443236fd4fcde3cfdfa7a2887c901?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
            alt="reviewer avatar"
            className="reviewer-avatar"
          />
          <div className="reviewer-details">
            <h3 className="reviewer-name">{review.name}</h3>
            <p className="reviewer-consulted-for">{review.consultedFor}</p>
          </div>
        </div>
        <p className="review-date">{review.date}</p>
      </header>
      <div className="review-content">
        <StarRating rating={review.rating} />
        <p className="review-text">{review.reviewText}</p>
      </div>
    </article>
  );
};
function Reviewss() {
  return (
    <>
      <section className="featured-reviews">
        <h2 className="section-title">Featured Reviews (102)</h2>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </section>
      <style jsx>{`
        .featured-reviews {
          border-radius: 18px;
          border: 1px solid rgba(220, 220, 220, 1);
          background-color: #fff;
          display: flex;
          margin-top: 34px;
          flex-direction: column;
          align-items: center;
          padding: 2px 0 37px;
        }
        @media (max-width: 991px) {
          .featured-reviews {
            max-width: 100%;
          }
        }
        .section-title {
          align-items: start;
          border-radius: 15px 18px 0px 0px;
          background: linear-gradient(90deg, #f4f7ec 0%, #fbfbfb 100%);
          align-self: stretch;
          color: #313131;
          justify-content: center;
          padding: 17px 31px;
          font: 600 24px Nunito, sans-serif;
          margin: 0;
        }
        @media (max-width: 991px) {
          .section-title {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .review-card {
          border-radius: 17px;
          background-color: #fafafa;
          display: flex;
          margin-top: 21px;
          width: 547px;
          max-width: 100%;
          flex-direction: column;
          padding: 13px 35px 22px;
        }
        @media (max-width: 991px) {
          .review-card {
            padding: 0 20px;
          }
        }
        .review-header {
          justify-content: center;
          display: flex;
          width: 100%;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .review-header {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .reviewer-info {
          align-items: start;
          display: flex;
          gap: 8px;
          padding: 8px 0 1px;
        }
        .reviewer-avatar {
          aspect-ratio: 0.96;
          object-fit: auto;
          object-position: center;
          width: 54px;
        }
        .reviewer-details {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .reviewer-name {
          color: #2f2f2f;
          font: 600 20px Nunito, sans-serif;
          margin: 0;
        }
        .reviewer-consulted-for {
          color: #939393;
          font: 500 16px Nunito, sans-serif;
          margin: 0;
        }
        .review-date {
          color: #979797;
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: -0.16px;
          margin: auto 0;
          font: 400 16px/112.5% Nunito, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .review-content {
          display: flex;
          margin-top: 14px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .review-content {
            max-width: 100%;
          }
        }
        .star-rating {
          align-self: start;
          display: flex;
          gap: 2px;
          padding: 0 1px;
        }
        .star-icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .review-text {
          color: var(--Neutrals-900, #2e2f2e);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: -0.16px;
          margin-top: 5px;
          font: 400 16px/24px Nunito, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .review-text {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

const AppointmentFee = () => {
  return (
    <div className="appointment-fee">
      <div className="fee-label">Appointment Fee</div>
      <div className="fee-amount">₹699.00</div>
    </div>
  );
};

const SessionModeSelector = () => {
  return (
    <div className="session-mode-selector">
      <div className="mode-label">Select your mode of session</div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51a4ce31b37eeb3e81656408409ad3378fc2a96e03594a8d4f84a21bee40fdb0?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
        alt=""
        className="mode-separator"
      />
    </div>
  );
};

const SessionMode = ({ mode, duration, isSelected }) => {
  return (
    <div className={`session-mode ${isSelected ? "selected" : ""}`}>
      <div className="mode-name">{mode}</div>
      {mode === "Video" && (
        <div className="video-icon-wrapper">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c315add1efbd9a550fbb0348eb1eb5a6215d041ab8744bd82315ef5e48ab25?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
            alt=""
            className="video-icon"
          />
        </div>
      )}
      <div className="mode-duration">{duration}</div>
    </div>
  );
};

const TimeSlotPicker = () => {
  return (
    <div className="time-slot-picker">
      <div className="picker-header">
        <div className="picker-label">
          Pick a <span>Time slot</span>
        </div>
        <div className="date-navigation">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c587430a96d4ea69bc10975cdfcf46223fff12585c0fa742cd568ff31fff30cf?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
            alt=""
            className="prev-date"
            style={{ height: "0px" }}
          />
          <div className="current-date" style={{ border: "none" }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6a9899711da65ac2050cc28b3d13af99fdd429e754002a2ea5ae81a1102bc7?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
              alt=""
              className="calendar-icon"
            />
          </div>
        </div>
      </div>
      <div className="date-slots">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9478eec83d4221f4d91d5b78d782796962e113474a70733951b64a7201d374a9?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          alt=""
          className="date-slots-prev"
        />
        <div className="date-slot-list">
          <div className="date-slot selected">
            <div className="slot-date">Mon, 10 Oct</div>
            <div className="slot-count">10 slots</div>
          </div>
          <div className="date-slot">
            <div className="slot-date">Tue, 11 Oct</div>
            <div className="slot-count">02 slots </div>
          </div>
          <div className="date-slot">
            <div className="slot-date">Wed, 12 Oct</div>
            <div className="slot-count">05 slots </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63cb9cca0ca44336285c8d4571141a4f07c85774f7945ee84906a66ddf1ba30?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          alt=""
          className="date-slots-next"
        />
      </div>
    </div>
  );
};

const TimeSlots = ({ label, slots }) => {
  return (
    <div className="time-slots">
      <div className="slot-label">{label}</div>
      <div className="slot-list">
        <div className="slot-row">
          {slots.slice(0, 4).map((slot, index) => (
            <div key={index} className="time-slot">
              {slot}
            </div>
          ))}
        </div>
        {slots.length > 4 && (
          <div className="slot-row">
            {slots.slice(4).map((slot, index) => (
              <div key={index} className="time-slot">
                {slot}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const AppointmentButton = () => {
  return <button className="appointment-button">Make an appointment</button>;
};

function Right() {
  const morningSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:15 AM",
    "10:45 AM",
    "11:00 AM",
  ];

  const eveningSlots = [
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:15 PM",
  ];

  return (
    <>
      <div className="appointment-container" style={{ marginTop: "-136vh" }}>
        <AppointmentFee />
        <SessionModeSelector />
        <div className="session-modes">
          <SessionMode mode="In-Clinic" duration="45 Mins" />
          <SessionMode mode="Video" duration="45 Mins" isSelected />
          <SessionMode mode="Chat" duration="10 Mins" />
        </div>
        <TimeSlotPicker />
        <TimeSlots label="Morning" slots={morningSlots} />
        <TimeSlots label="Evening" slots={eveningSlots} />
        <AppointmentButton />
      </div>
      <style jsx>{`
        .appointment-container {
          border-radius: 29px;
          border: 1px solid rgba(232, 232, 232, 1);
          background-color: #fff;
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 40px 18px;
        }

        @media (max-width: 991px) {
          .appointment-container {
            max-width: 100%;
            margin-top: 29px;
            padding-right: 20px;
          }
        }

        .appointment-fee {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          border-radius: 15px;
          border: 1px solid rgba(226, 226, 226, 1);
          background-color: #fff;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          letter-spacing: 0.2px;
          padding: 21px 30px;
        }

        @media (max-width: 991px) {
          .appointment-fee {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }

        .fee-label {
          color: #000;
          font-family: Nunito, sans-serif;
          flex-grow: 1;
        }

        .fee-amount {
          color: #3a643b;
          font-family: Inter, sans-serif;
        }

        .session-mode-selector {
          display: flex;
          margin-top: 51px;
          gap: 20px;
          font-size: 20px;
          color: #000;
          font-weight: 700;
          text-align: center;
          letter-spacing: 0.5px;
        }

        @media (max-width: 991px) {
          .session-mode-selector {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }

        .mode-label {
          font-family: Nunito, sans-serif;
          flex-grow: 1;
        }

        .mode-separator {
          height: 0px;
          width: 40%;
          border: 1px solid rgba(212, 212, 212, 1);
          margin: auto 0;
        }

        .session-modes {
          display: flex;
          margin-top: 45px;
          padding-right: 5px;
          gap: 20px;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .session-modes {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }

        .session-mode {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          border-radius: 10px;
          border: 1px solid rgba(229, 229, 229, 1);
          background-color: #fff;
          font-size: 16px;
          text-align: center;
          letter-spacing: 0.5px;
          padding: 21px 46px;
        }

        .session-mode.selected {
          border-color: rgba(58, 100, 59, 0.52);
          background-color: #f2fbf2;
        }

        @media (max-width: 991px) {
          .session-mode {
            padding: 0 20px;
          }
        }

        .mode-name {
          color: #1f1f1f;
          font-family: Gotham Rounded, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 350;
        }

        .mode-duration {
          color: #606060;
          font-family: Nunito, sans-serif;
          font-weight: 400;
          margin-top: 14px;
        }

        .video-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1px 0;
        }

        .video-icon {
          width: 20px;
          height: 20px;
          background-color: #3a643b;
          border-radius: 50%;
        }

        .time-slot-picker {
          display: flex;
          flex-direction: column;
          margin-top: 38px;
        }

        @media (max-width: 991px) {
          .time-slot-picker {
            max-width: 100%;
          }
        }

        .picker-header {
          display: flex;
          width: 100%;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .picker-header {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }

        .picker-label {
          color: #000;
          text-align: center;
          letter-spacing: 0.2px;
          text-transform: lowercase;
          flex-grow: 1;
          margin: auto 0;
          font: 700 20px Nunito, sans-serif;
        }

        .date-navigation {
          display: flex;
          gap: 9px;
          flex-grow: 1;
        }

        .prev-date,
        .current-date {
          // height: 0px;
          width: fit-content;
          border: 1px solid rgba(212, 212, 212, 1);
          flex-grow: 1;
          margin: auto 0;
        }

        .calendar-icon {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(138, 138, 138, 1);
          background-color: #fff;
          border-radius: 50%;
        }

        .date-slots {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 21px;
          border: 1px solid rgba(225, 225, 225, 1);
          background-color: #fff;
          margin-top: 21px;
          font-size: 16px;
          text-align: center;
          padding: 22px 32px;
        }

        @media (max-width: 991px) {
          .date-slots {
            max-width: 100%;
            padding: 0 20px;
          }
        }

        .date-slots-prev,
        .date-slots-next {
          width: 20px;
          align-self: stretch;
          margin: auto 0;
        }

        .date-slot-list {
          display: flex;
          gap: 10px;
          flex-grow: 1;
          justify-content: center;
        }

        .date-slot {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 11px;
          border: 1px solid rgba(226, 226, 226, 1);
          background-color: #fff;
          padding: 8px 12px;
        }

        .date-slot.selected {
          border-color: rgba(58, 100, 59, 1);
          background-color: #f2fbf2;
        }

        .slot-date {
          color: #131313;
          font-family: Inter, sans-serif;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        .slot-count {
          color: #d5512e;
          font-family: Nunito, sans-serif;
          font-weight: 700;
          margin-top: 8px;
        }

        .date-slot.selected .slot-date {
          color: #3a643b;
          font-weight: 600;
        }

        .date-slot.selected .slot-count {
          color: #818181;
        }

        .time-slots {
          display: flex;
          flex-direction: column;
          text-align: center;
          letter-spacing: 0.2px;
          margin-top: 35px;
          :hover {
            cursor: pointer;
          }
        }

        @media (max-width: 991px) {
          .time-slots {
            max-width: 100%;
          }
        }

        .slot-label {
          color: #000;
          font: 700 18px Nunito, sans-serif;
        }

        @media (max-width: 991px) {
          .slot-label {
            max-width: 100%;
          }
        }

        .slot-list {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-content: flex-start;
          margin-top: 13px;
          font-weight: 400;
        }

        @media (max-width: 991px) {
          .slot-list {
            max-width: 100%;
          }
        }

        .slot-row {
          display: flex;
          gap: 12px;
          font-size: 15px;
          color: #131313;
        }

        @media (max-width: 991px) {
          .slot-row {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }

        .time-slot {
          font-family: Inter, sans-serif;
          justify-content: center;
          border-radius: 22px;
          border: 1px solid rgba(235, 235, 235, 1);
          background-color: #fff;
          padding: 13px;
          margin-top: 15px;
        }

        .time-slot:last-child {
          background-color: #3a643b;
          color: #fff;
          font-size: 14px;
        }

        .appointment-button {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: #3a643b;
          color: #fff;
          text-transform: capitalize;
          margin: 41px 35px 0 34px;
          padding: 12px 60px;
          font: 500 20px Inter, sans-serif;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .appointment-button {
            max-width: 100%;
            margin: 40px 10px 0 0;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

const specializations = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2266f7554ce9bf34f342cf2f564ff4e93e2241f0efe9d253428b9ab0c7ea8f0d?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    title: "women's health",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8da970b286c56be395d6d1df3b62943e46f3f7c1acfb52037db809a5ce213829?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    title: "Skin Care",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/207d81f12d6904dd3edfeb93acbe7d728bf8cf00ed10c549128ae9ba8041eb1a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    title: "Immunity",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/78ad307c53a7dcd3c40db6df1068f2661c2162ea8f9120475d766eebc2f6dff9?apiKey=ba1aeac1755d4beeb947d179fb494a3a&",
    title: "Hair care",
  },
];

function Specilized() {
  return (
    <SpecializationSection>
      <SectionTitle style={{ marginTop: "-1px" }}>I Specialize In</SectionTitle>
      <SpecializationList>
        {specializations.map((specialization, index) => (
          <SpecializationItem key={index}>
            <SpecializationIcon>
              <img src={specialization.icon} alt="" />
            </SpecializationIcon>
            <SpecializationTitle>{specialization.title}</SpecializationTitle>
          </SpecializationItem>
        ))}
      </SpecializationList>
    </SpecializationSection>
  );
}

const SpecializationSection = styled.section`
  border-radius: 18px;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  padding: 1px 0 35px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  align-items: start;
  border-radius: 15px 18px 0 0;
  background: linear-gradient(
    90deg,
    #f4f7ec 0%,
    rgba(248, 248, 247, 0.46) 100%
  );
  color: #313131;
  justify-content: center;
  padding: 20px 37px;
  font: 600 24px Nunito, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const SpecializationList = styled.div`
  width: 456px;
  max-width: 100%;
  margin: 31px 0 0 32px;
  padding: 0 1px;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const SpecializationItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 14px;
  }
`;

const SpecializationIcon = styled.div`
  align-items: start;
  border-radius: 9px;
  border: 1px solid #eaeaea;
  background-color: #fffcf2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9px 0;

  @media (max-width: 991px) {
    padding-right: 20px;
  }

  img {
    aspect-ratio: 1.08;
    object-fit: contain;
    width: 84px;
  }
`;

const SpecializationTitle = styled.h3`
  color: #000;
  text-transform: capitalize;
  margin-top: 7px;
  font: 500 16px/120% Nunito, sans-serif;
  text-align: center;
`;

export default function Rest() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          marginTop: "15vh",
        }}
      >
        <div style={{ width: "620px" }}>
          <DoctorProfile />
          <Specilized />
          <Concern />
          <Work />
          <Reviewss />
        </div>
        <div style={{ width: "580px" }}>
          <Right />
        </div>
      </div>
    </div>
  );
}
