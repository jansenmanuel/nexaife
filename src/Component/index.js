import "antd/dist/antd.min.css";
import "./Style/main.css";
import "./Style/font.css";

import NcArrowDown from "./Asset/Icon/NcArrowDown";
import NcArrowLeft from "./Asset/Icon/NcArrowLeft";
import NcArrowRight from "./Asset/Icon/NcArrowRight";
import NcArrowUp from "./Asset/Icon/NcArrowUp";
import NcBroadcast from "./Asset/Icon/NcBroadcast";
import NcClose from "./Asset/Icon/NcClose";
import NcCloseSm from "./Asset/Icon/NcCloseSm.svg";
import NcDataProcess from "./Asset/Icon/NcDataProcess";
import NcError from "./Asset/Icon/NcError.svg";
import NcEyesClose from "./Asset/Icon/NcEyesClose.svg";
import NcEyesOpen from "./Asset/Icon/NcEyesOpen.svg";
import NcHome from "./Asset/Icon/NcHome";
import NcInfo from "./Asset/Icon/NcInfo";
import NcList from "./Asset/Icon/NcList";
import NcLogout from "./Asset/Icon/NcLogout";
import NcMapping from "./Asset/Icon/NcMapping";
import NcPerson from "./Asset/Icon/NcPerson";
import NcReject from "./Asset/Icon/NcReject";
import NcSearch from "./Asset/Icon/NcSearch";
import NcSelectOption from "./Asset/Icon/NcSelectOption";
import NcSortable from "./Asset/Icon/NcSortable";
import NcSuccess from "./Asset/Icon/NcSuccess.svg";
import NcWarning from "./Asset/Icon/NcWarning.svg";
import Button from "./Atomic/Button/Button";
import Card from "./Atomic/Card/Card";
// import Card from "./Atomic/Card/Card";
import Container from "./Atomic/Container/Container/Container";
import ContainerFluid from "./Atomic/Container/ContainerFluid/ContainerFluid";
import Div from "./Atomic/Container/Div/Div";
import Flex from "./Atomic/Container/Flex/Flex";
import Footer from "./Atomic/Footer/Footer";
import Form from "./Atomic/Form/Form";
import Col from "./Atomic/Grid/Col/Col";
import Row from "./Atomic/Grid/Row/Row";
import Heading from "./Atomic/Heading/Heading";
// import Image from "./Atomic/Image/Image/Image";
import Logo from "./Atomic/Image/Logo/Logo";
import Input from "./Atomic/Input/Input/Input";
import InputFloating from "./Atomic/Input/InputFloating/InputFloating";
import InputPhoneNumber from "./Molecules/InputPhoneNumber/InputPhoneNumber";
import InputSearch from "./Molecules/SearchRecommendation/InputSearch";
import Label from "./Atomic/Label/Label/Label";
import LabelFloating from "./Atomic/Label/LabelFloating/LabelFloating";
import Li from "./Atomic/List/Li/Li";
import Ol from "./Atomic/List/Ol/Ol";
import Ul from "./Atomic/List/Ul/Ul";
import { Spinner } from "./Atomic/Loader/Spinner/Spinner";
import MBody from "./Atomic/Modal/MBody/MBody";
import MFooter from "./Atomic/Modal/MFooter/MFooter";
import MHeader from "./Atomic/Modal/MHeader/MHeader";
import Modal from "./Atomic/Modal/Modal/Modal";
import Nav from "./Atomic/NavBar/Nav/Nav";
import NavBar from "./Atomic/NavBar/NavBar/NavBar";
import NavBarItem from "./Atomic/NavBar/NavBarItem/NavBarItem";
import NavBarNav from "./Atomic/NavBar/NavBarNav/NavBarNav";
import Paragraph from "./Atomic/Paragraph/Paragraph";
import Option from "./Atomic/Selector/Option/Option";
import Select from "./Atomic/Selector/Select/Select";
import SideBarItem from "./Atomic/SideBar/SideBarItem/SideBarItem";
import SideBarSide from "./Atomic/SideBar/SideBarSide/SideBarSide";
import SideTitle from "./Atomic/SideBar/SideBarTitle/SideBarTitle";
import Span from "./Atomic/Span/Span";
// import Table from "./Atomic/Table/Table/Table";
import Tbody from "./Atomic/Table/Tbody/Tbody";
import Td from "./Atomic/Table/Td/Td";
import Tfoot from "./Atomic/Table/Tfoot/Tfoot";
import Th from "./Atomic/Table/Th/Th";
import Thead from "./Atomic/Table/Thead/Thead";
import Tr from "./Atomic/Table/Tr/Tr";
// import Breadcrumb from "./Molecules/Breadcrumb/Breadcrumb";
import ButtonGroup from "./Molecules/ButtonGroup/ButtonGroup";
import Calender from "./Molecules/Calender/Calender/Calender";
import DatePickers from "./Molecules/Calender/DatePicker2/DatePicker";
import DatePicker from "./Molecules/Calender/DatePicker/DatePicker/DatePicker";
import CheckBox from "./Molecules/CheckBox/CheckBox";
import Field from "./Molecules/Field/Field/Field";
import ListEmpty from "./Molecules/ListEmpty/ListEmpty";
import ModalBody from "./Molecules/Modal/ModalBody/ModalBody";
import ModalDialog from "./Molecules/Modal/ModalDialog/ModalDialog";
import ModalFooter from "./Molecules/Modal/ModalFooter/ModalFooter";
import ModalHeader from "./Molecules/Modal/ModalHeader/ModalHeader";
import NotificationProvider from "./Molecules/Notifications/NotificationProvider";
import { useNotification } from "./Molecules/Notifications/UseNotification";
import SideBarIcon from "./Molecules/SideBar/SideBarIcon/SideBarIcon";
import SideBarMenu from "./Molecules/SideBar/SideBarMenu/SideBarMenu";
import Switch from "./Molecules/Switch/Switch";
import DataTable from "./Molecules/Table/DataTable/DataTable";
import PaginationTable from "./Molecules/Table/PaginationTable/PaginationTable";
import Pin from "./Atomic/Pin/Pin";
import TableBody from "./Molecules/Table/TableBody/TableBody";
import TableFooter from "./Molecules/Table/TableFooter/TableFooter";
import TableHeader from "./Molecules/Table/TableHeader/TableHeader";
import TableLimit from "./Molecules/Table/TableLimit/TableLimit";
import TitlePage from "./Molecules/TitlePage/TitlePage";
import BottomContent from "./Organisms/Layout/BottomContent/BottomContent";
import LayoutPage from "./Organisms/Layout/LayoutPage/LayoutPage";
import DropDownProfile from "./Organisms/Navigation/DropDownProfile/DropDownProfile";
import SideBar from "./Organisms/Navigation/SideBar/SideBar/SideBar";
import SideBarMenuIcon from "./Organisms/Navigation/SideBar/SideBarMenuIcon/SideBarMenuIcon";
import TopBar from "./Organisms/Navigation/TopBar/TopBar";
import useComponentVisible from "./Utils/CustomHook/UseComponentVisible";
import FileUpload from "./Molecules/FileUpload/FileUpload";
import Alert from "./Atomic/Alert/Alert";
import PrePostInput from "./Atomic/Input/PrePostInput/PrePostInput";
import InfoCard from "./Molecules/InformationCard/InfoCard";
// import Dialog_V_2_0_2 from "./Molecules/Dialog/DIALOG_V_2_0_2";
// import TAG_V_2_0_1 from "./Atomic/Tag/TAG_V_2_0_1";
import Checkbox from "./Atomic/Checkbox/Checkbox/Checkbox";
// import DIVIDER_V_2_0_1 from "./Atomic/Divider/DIVIDER_V_2_0_1";
import Toggle from "./Atomic/Toggle/Toggle";
import ToggleGroup from "./Molecules/ToggleGroup/ToggleGroup";
import Legend from "./Atomic/Legends/Legend";
import LegendGroup from "./Molecules/Legends/Legend";
import Rating from "./Molecules/Rating/Rating";
import TextArea from "./Atomic/Input/TextArea/TextArea";
import Table from "./Molecules/Table_v2_0_1/Table";
// import BADGE_V_2_0_1 from "./Atomic/Badge/BADGE_V_2_0_1";
import Slider from "./Atomic/Slider/Slider";
import ButtonLoginGrochat from "./Molecules/ButtonLoginGroChat/ButtonLoginGrochat";
import Steps from "./Atomic/Steps/Steps";
import Tag from "./Atomic/Tag/Tag";
import Divider from "./Atomic/Divider/Divider";
import Avatar from "./Atomic/Avatar/Avatar";
import AvatarGroup from "./Molecules/AvatarGroup/AvatarGroup";
import Breadcrumb from "./Molecules/BreadcrumbV201/Breadcrumb";
import Badge from "./Atomic/Badge/Badge";
import Dialog from "./Molecules/Dialog/Dialog";
import Tooltip from "./Atomic/Tooltips/Tooltips";
import Tabs from "./Atomic/Tab/Tab";
// import Select from "./Atomic/Selector/Select/SELECT_V_2_0_3";
import ProgressBarAtomic from "./Atomic/ProgressBar/ProgressBar";
import ProgressBar from "./Molecules/ProgressBar/ProgressBar";
import HtmlArea from "./Atomic/HtmlArea/HtmlArea";
import Image from "./Atomic/Image/Image/Image";
import MultipleSelect from "./Atomic/Selector/MultipleSelect/MultipleSelect";
import Video from "./Atomic/Video/Video";
import TimePicker from "./Molecules/Calender/TimePicker/TimePicker";
import PreviewAds from "./Molecules/PreviewAds/PreviewAds";
import List from "./Atomic/List/List";
import LocationSelectorDialog from "./Organisms/Dialog/LocationSelectorDialog";
import useEffectOnce from "./Utils/CustomHook/useEffectOnce";
import useScrollBottom from "./Utils/CustomHook/useScrollBottom";
import LanguageProvider from "./providers/LanguageProvider";
import useLanguage from "./hooks/useLanguage";

const nexIcon = {
  NcReject,
  NcSearch,
  NcList,
  NcSelectOption,
  NcClose,
  NcBroadcast,
  NcLogout,
  NcPerson,
  NcCloseSm,
  NcError,
  NcInfo,
  NcSuccess,
  NcWarning,
  NcEyesOpen,
  NcEyesClose,
  NcHome,
  NcDataProcess,
  NcArrowDown,
  NcArrowUp,
  NcArrowRight,
  NcArrowLeft,
  NcMapping,
  NcSortable,
};

export {
  // BADGE_V_2_0_1,
  Badge,
  BottomContent,
  Breadcrumb,
  // Breadcrumb,
  Button,
  ButtonGroup,
  Calender,
  // Card,
  CheckBox,
  Col,
  Container,
  ContainerFluid,
  DataTable,
  DatePicker,
  DatePickers,
  Div,
  DropDownProfile,
  Field,
  Flex,
  Footer,
  Form,
  Heading,
  HtmlArea,
  InputPhoneNumber,
  // Image,
  Image,
  Input,
  InputFloating,
  InputSearch,
  Label,
  LabelFloating,
  LayoutPage,
  Legend,
  LegendGroup,
  Li,
  ListEmpty,
  Logo,
  MBody,
  MFooter,
  MHeader,
  MultipleSelect,
  Modal,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  Nav,
  NavBar,
  NavBarItem,
  NavBarNav,
  nexIcon,
  NotificationProvider,
  Ol,
  Option,
  PaginationTable,
  Paragraph,
  Row,
  Rating,
  Select,
  SideBar,
  SideBarIcon,
  SideBarItem,
  SideBarMenu,
  SideBarMenuIcon,
  SideBarSide,
  SideTitle,
  Slider,
  Span,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableLimit,
  TextArea,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  TimePicker,
  TitlePage,
  TopBar,
  Tr,
  Pin,
  Ul,
  useComponentVisible,
  useNotification,
  useEffectOnce,
  useScrollBottom,
  Alert,
  // DIVIDER_V_2_0_1,
  Toggle,
  ToggleGroup,
  PrePostInput,
  InfoCard,
  Dialog,
  Tag,
  // CheckBoxv1,
  Checkbox,
  Card,
  // Table,
  ButtonLoginGrochat,
  Steps,
  Divider,
  Avatar,
  AvatarGroup,
  Tooltip,
  Tabs,
  // Select,
  FileUpload,
  ProgressBarAtomic,
  ProgressBar,
  Video,
  PreviewAds,
  List,
  LocationSelectorDialog,
  useLanguage,
  LanguageProvider,
};
