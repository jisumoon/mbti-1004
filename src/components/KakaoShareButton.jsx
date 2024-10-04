import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  const url = "https://catmbti02.netlify.app/"; // 나의 페이지
  const resultURL = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("79f68ce900eb272bf4929eb50f00e30e");
  }, []);

  const shareKakao = () => {
    Kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 가장 잘 맞는 고양이는?${data.name}`,
        imageUrl: `${url}${data.img}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return <Button onClick={shareKakao}>카카오톡 공유하기</Button>;
};

export default KakaoShareButton;
