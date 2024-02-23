import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MGraph from "../components/mainpageGraph";

const MainSection = styled.div`
  overflow: hidden;
  .mainPart {
    text-align: center;
    background-color: black;
    color: #fff;
    font-family: Pretendard;
    .part1 {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      margin-top: 196px;
      margin-bottom: 422.13px;
      .hook1 {
        text-align: center;
        font-size: 71.094px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
      }
      .hook2 {
        text-align: center;
        font-size: 42.656px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-bottom: 86.497px;
      }
      .hook3 {
        font-size: 24.883px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 21px 29.622px;
        flex-wrap: wrap;
        .worry {
          border-radius: 52.444px;
          border: 1.185px solid #fff;
          background: #000;
          display: flex;
          width: 569.935px;
          padding: 28.438px 60.43px;
          justify-content: center;
          align-items: center;
          gap: 11.849px;
        }
      }
    }
    .title1 {
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .title2 {
      font-size: 50px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    .slider-container {
      margin: 86px 0 86px -60px;
    }
    .slick-slide {
      width: 500px;
      margin-left: 60px;
    }
    .slideImg {
      height: 300px;
      flex-shrink: 0;
      border-radius: 58.122px;
    }
    .dirBtn {
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: inline-flex;
      padding: 26px 105px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 16px;
      border: 1px solid #fff;
      background: #000;
      margin-bottom: 240px;
    }
    .farmImg {
      display: flex;
      justify-content: center;
      gap: 50px;
      margin: 100px 0 185px;
    }
    .graphImg > img {
      width: 310px;
      height: 310px;
      border-radius: 44px;
      margin-top: 45px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Mainpage = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
  };

  return (
    <MainSection>
      <div className="mainPart">
        <div className="part1">
          <div className="hook1">🔥잠깐!</div>
          <br />
          <div className="hook2">혹시 나도 도파민 중독 아닐까?</div>
          <div className="hook3">
            <div className="worry">
              😔 습관적으로 인스타그램을 들어가게 돼요
            </div>
            <div className="worry">😅 밥 먹을 때 넷플릭스는 필수예요</div>
            <div className="worry">☹️ 일상이 재미없고 따분해요</div>
            <div className="worry">🤯 시간이 유독 빠르게 가는 것 같아요</div>
          </div>
        </div>
        <div className="part2">
          <div className="title1">
            건강한 도파민은 남다른 경험을 쌓아갈 때 분출됩니다.
          </div>
          <br />
          <div className="title2">
            도파밍에서 다른 사람들의 남다른 경험을 구경할 수 있어요.
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <img
                className="slideImg"
                src="https://s3-alpha-sig.figma.com/img/b931/5d85/1ba96db5ab1515945994a52fceeb7b2a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jY~TZO5S67RSiEdkTENEt2pWXD5zbtYbnoxFVBBaRqDjc0sabJabvsIQ27AMDMplibzZcBpCOlru4STupP-fFvkkfNCnWfadvxn6EgHuqF7cFkkBt5aC7aR2nqf43XL9XIyCQvoOyaK-fFAhjs8j1z3Q~XVYaRErooQ6JpiJs7LLGYnWHMWNUM7HE9UXiyiubxyaH51PAGrqel03etiw3rVVY8cqASFCERo5dHGfJXT7xLClEcHHxkPPsAN0Qlad7ErvLJzIuSazSpYEureMxm277a35EMjzpuDgCiNT0YGOMyHgOFbxw2cv~StZ8xRIyEJ3eN020wBmqa70f9I8dw__"
                alt="slideImage1"
              />
              <img
                className="slideImg"
                src="https://s3-alpha-sig.figma.com/img/a61d/66eb/a4f1ce78cd09449594f7685c8adfb32b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FXe9HBEn~8Xb3cMg~CHVOAFdnQU~XmIupCyTxFSqD5fcIA40JmT~Nr-VAutzUirpgFDmYwbus9DzC12x74gKLTxWRJ18fPdmQidhjYnmrk6qJv32la1SX2kAH-Dj2xW~gfmYXo6edwOVNrfjHeMUQFuOnqcd1kEnbrKXLRG16Axk22ZEAZNLXrH3Zk2IV40p9IdIJruuqVw1Nq-jnKWMoU1qqN4OqEZneA0GGFGVj7tQnSVwY4kwZQ5M15UqZLKA4pc6pEvaFQb4aRaTWTJsk-mKL0Eyu4f6QNK~BIalrVGTo8dDM3osC6NS2AKygnRhN6~MOLzzQvuCK2Iff4nTqg__"
                alt="slideImage2"
              />
              <img
                className="slideImg"
                src="https://s3-alpha-sig.figma.com/img/c3fb/1ca4/fd8f25b4ad833a08ffd70732160aa6c2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ozHnDqfHGn4QdnsKZ5hj5tmCDfGqzZxoDDE~w6Xw6oWu8r2A4Jmtf~guSPajtG3MwHKCFo7biBWaRaAldWBfEjU6Dg9DPBSKEno6w4oNoIUeNkSt09OCf5BBQM7yHOF5gb4SyxAp3CBrHOLm4i-T6PVViM6y2BeNpKTuYjzsVF6oAAmBEsW3GvDF0N8KeXTMt9FqhpuNqWG1P4O7PtZdZcPA9EYg-ADzVdJsbzBAJxtXqEqO8nI1XL7aYX3uBlBISuhTZuipho9mknwbPPYNVT06gdNwJf23gZxJlL5Q37ox9q7zs-Wy03cL0LNk2T80Zpk4rf1mT~wfdoUNEd0rrw__"
                alt="slideImage3"
              />
              <img
                className="slideImg"
                src="https://s3-alpha-sig.figma.com/img/a1c5/1cd6/347e5cefc8dfb701f0ab558a4c41d015?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PXvPqGAFRnTQ-ixch1~tBvnLU84~9qUYzQ5A~ojnZ9wWGmvfwTAEAvt9nXFTNwZCaLsCiRdXG6qgVf7ya13Iu-UTfMny7GUbDyJlY~Dko~QDgAIbsOcUhMaHfEJ-liXDp5HSQtRksHdaD0~C0v4Srll7IrWKUC8TajbbIuDOiicwp0Kj7JwFdF1jram0E6eR621LojpW6ChtR6tbxsWTRpz06mi~CuvbD0jYY9VGIhBEawsewSHBTVSKOTY0rxaaUwXx-3W2uFf7o7CILNp~03rbkwBBd~HyEUqy7Ycwv37YZeTTlgLIibKNA5zLoKfsizq8WS2dhnvhX6nmkxhpYw__"
                alt="slideImage4"
              />
            </Slider>
          </div>
          <StyledLink to="/experience" className="dirBtn">
            경험 파밍 바로가기
          </StyledLink>
        </div>
        <div className="part3">
          <div className="title1">
            또한, 불확실해보였던 것들이 확실해질 때 건강한 도파민은 분비됩니다.
          </div>
          <br />
          <div className="title2">
            도파밍에서는 시작부터 끝까지 경험이 이루어지는 과정을
            <br /> 직접 설계하고 볼 수 있습니다.
          </div>
          <div className="farmImg">
            <div className="graphImg">
              <img
                src="https://s3-alpha-sig.figma.com/img/6dea/3963/73cff3f6c49eab942069770c7fa03d67?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nckR~O~VrdeAB5cX3depPWVnRODTA2NXq50lqF~6LkwaJ8g~on0kqM3TqmrVhjN23kFM~-tem1vQF7UlxDzDyAf2OmjfGUuZVYAQvalaMMdkq9a3DMSoFaWA1Egg3WlevEMBNJzfgsKqVNXWmbrRwgkxvMCN1o6pU~78b9ljadrQSfQ8g2WToC5N6eyHiBWR-rFk2GxK0Z5~PB4OvN48k5j2E59TP8R3-9Y1O2EhWj0-HZo-Mn9eUSzMu7urihhWPjje46ISRBf3AdksqmTN3n2zDO9nZGKuX~D2IbA47SPJbMbBqUWLomCl377lBeijERV5Fq~lyJvFXg~vfo8p1g__"
                alt="graphImg"
              />
            </div>
            <MGraph />
          </div>
          <StyledLink to="/experience" className="dirBtn">
            나의 팜 바로가기
          </StyledLink>
        </div>
      </div>
    </MainSection>
  );
};

export default Mainpage;
