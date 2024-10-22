import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <div style={{ padding: "0px 0px 0px 20px" }}>
      <SectionDivider />
    </div>
    <div style={{ padding: "0px 0px 0px 20px" }}>
      <SectionTitle main>Projects</SectionTitle>
    </div>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.images} alt="img" />
            <TitleContent>
              <HeaderThree >{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info" style={{ whiteSpace: "pre-line" }}>
              {p.description}
            </CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
