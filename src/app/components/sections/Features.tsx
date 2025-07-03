import React from "react";
import styles from "./styles/section.module.css";
import clsx from "clsx";
import ClassSchedule from "../featuresComponents/ClassSchedule";
import CourseMaterials from "../featuresComponents/CourseMaterials";
import AiStudy from "../featuresComponents/AiStudy";
import AppMessaging from "../featuresComponents/AppMessaging";
import Marketplace from "../featuresComponents/Marketplace";

const Features = () => {
  return (
    <div
      className={clsx(
        styles.theme,
        "bg-[var(--background)] py-16 pl-6 pr-3 md:p-16"
      )}
    >
      <ClassSchedule />
      <CourseMaterials />
      <AiStudy />
      <AppMessaging />
      <Marketplace />
    </div>
  );
};

export default Features;
