import React from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => <FontAwesomeIcon spin pulse icon={faSpinner} />;

export default Loading;
