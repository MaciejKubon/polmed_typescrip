import date from "./data/data_calender.json" assert { type: "json" };
import data from "./data/data_doctor.json" assert { type: "json" };
import {doctorData} from "./types/types"
import { informationPanel } from "./helpers/informationPanel.js";
import { selectPanel } from "./helpers/selectPanel.js";
const link: string = location.href;
const id: string = link.split("?")[1].split("=")[1];
const doctorInformation:doctorData= data.id[id];
const doctorCalender:object = date[id];



const selectionPanelElement:HTMLElement = document.querySelector('.selectionPanel');
selectionPanelElement.appendChild(informationPanel(doctorInformation));
selectionPanelElement.appendChild(selectPanel(doctorInformation.type_of_visit, doctorInformation.price_of_visit, doctorCalender));