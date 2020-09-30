import React, { useState, useContext, createContext, useEffect } from "react";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  RatingScore,
  RatingCompany,
  Content,
  Meta,
  Entities,
  Item,
  Image,
  Gradient,
} from "./styles/card";
import close from "../../assets/icons/close.png";

const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(false);

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardTitle({ item, setVideoURL, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
        setVideoURL(item.videoURL);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ src, ...restProps }) {
  const [img, setImage] = useState();

  useEffect(() => {
    if (src) {
      import(`../../assets${src}`)
        .then((image) => setImage(image.default))
        .catch((error) => {});
    }
  }, [src]);

  return <Image {...restProps} src={img} />;
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
  const [src, setImage] = useState();

  useEffect(() => {
    if (showFeature) {
      import(`../../assets/${category}/${itemFeature.stream}/${itemFeature.slug}/large.jpg`)
        .then((image) => setImage(image.default))
        .catch((error) => {});
    }
  }, [showFeature, category, itemFeature]);

  return showFeature ? (
    <Feature src={src}>
      {/* <Gradient /> */}
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src={close} alt="Close" />
        </FeatureClose>
        <span className="fas fa-star" style={{ margin: "20px 0", fontSize: "20px", color: "#001858" }}></span>
        <RatingScore>90%</RatingScore>
        <RatingCompany>ROTTEN TOMATOES</RatingCompany>
        {children}
      </Content>
    </Feature>
  ) : null;
};
