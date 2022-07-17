import React, { FC } from "react";
import { IExploreSection } from "../../types";
import { ExploreSection } from "./ExploreSection";
import { ExploreTitle } from "..";

interface ISectionType {
    title: string,
    content: IExploreSection[]
}

export const Section: FC<ISectionType> = ({title, content}) => {
  return (
    <div className="h-fit my-6 w-full"> 
      <ExploreTitle title={title}/>
        <div className="flex flex-col w-full gap-3 md:flex-row flex-wrap justify-center">
          {content.map((cont, index) => 
            <React.Fragment key={index}>
              <ExploreSection {...cont}/>
            </React.Fragment>   
          )}
        </div>
    </div>
  );
}
