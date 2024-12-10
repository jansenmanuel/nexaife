import React from "react";
import LIST_V_2_0_2 from "../../../Component/Atomic/List/List";
import { Col, Row } from "../../../Component";
import NcCalendarIcon from "../../../Component/Asset/Icon/NcCalendarIcon";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { ROUTE } from "../../Constant/routesConstant";
import {Table} from "antd";
import {exampleApiCol} from "../../config";
import {listDataPage} from "../../data";

const ListPage = () => {
  const navigate = useNavigate();
  const { mainColor } = useSelector((state) => state.properties);

  // Function onClickDetail
  const onClickDetail = () => {
    console.log("Click Detail");
  };

  const onClickOption = (response) => {
    console.log("Click Option");
    console.log(response);
  };

  const goToPage = (response) => {
    console.log(response);
    // navigate(response?.data?.value);
  };

  const onClickCheckbox = (response) => {
    console.log(response)
  }

  const onClickToggle = (response) => {
    console.log(response)
  }

  const option = [
    { id: 1, titleLabel: "Apel" },
    { id: 2, titleLabel: "Jeruk" },
    { id: 3, titleLabel: "Mangga" },
    { id: 4, titleLabel: "Leci" },
    { id: 5, titleLabel: "Anggur" },
    { id: 6, titleLabel: "Jambu" },
    { id: 7, titleLabel: "Salak" },
  ];

  return (
    <div>
      <h1>List Default</h1>
      <Row>
        <Col width={2}>List SM</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            size={"sm"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Md</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            size={"md"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Lg</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            size={"lg"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            size={"xl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xxl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            size={"xxl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <h1>List Checkbox</h1>
      <Row>
        <Col width={2}>List SM</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickCheckbox={onClickCheckbox}
            id={1}
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            isCheckbox={true}
            size={"sm"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Md</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickCheckbox={onClickCheckbox}
            id={2}
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            isCheckbox={true}
            size={"md"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Lg</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickCheckbox={onClickCheckbox}
            id={3}
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            isCheckbox={true}
            size={"lg"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickCheckbox={onClickCheckbox}
            id={4}
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            isCheckbox={true}
            size={"xl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xxl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            onClickCheckbox={onClickCheckbox}
            id={5}
            onClickList={goToPage}
            value={ROUTE.PAGE_BUTTON}
            captionLabel="Text Caption"
            isCheckbox={true}
            size={"xxl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <h1>List with Icon</h1>
      <Row>
        <Col width={2}>List SM</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            prefixIcon={<NcCalendarIcon size={16}/>}
            size={"sm"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Md</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            prefixIcon={<NcCalendarIcon size={20}/>}
            size={"md"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Lg</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            prefixIcon={<NcCalendarIcon size={24}/>}
            size={"lg"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            prefixIcon={<NcCalendarIcon size={28}/>}
            size={"xl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xxl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            prefixIcon={<NcCalendarIcon size={36}/>}
            size={"xxl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <h1>List with Toggle</h1>
      <Row>
        <Col width={2}>List SM</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            isToggle={true}
            onClickToggle={onClickToggle}
            onClickList={goToPage}
            size={"sm"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Md</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            isToggle={true}
            onClickToggle={onClickToggle}
            onClickList={goToPage}
            size={"md"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Lg</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            isToggle={true}
            onClickToggle={onClickToggle}
            onClickList={goToPage}
            size={"lg"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            isToggle={true}
            onClickToggle={onClickToggle}
            onClickList={goToPage}
            size={"xl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xxl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            isToggle={true}
            onClickToggle={onClickToggle}
            onClickList={goToPage}
            size={"xxl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <h1>List with Detail</h1>
      <Row>
        <Col width={2}>List SM</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            onClickDetail={onClickDetail}
            detailLabel="Detail"
            size={"sm"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Md</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            onClickDetail={onClickDetail}
            detailLabel="Detail"
            size={"md"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Lg</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            onClickDetail={onClickDetail}
            detailLabel="Detail"
            size={"lg"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            onClickDetail={onClickDetail}
            detailLabel="Detail"
            size={"xl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <Row>
        <Col width={2}>List Xxl</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="Text Caption"
            onClickDetail={onClickDetail}
            detailLabel="Detail"
            size={"xxl"}
            mainColor={mainColor}
          />
        </Col>
      </Row>
      <h1>Web List Card</h1>
      <Row>
        <Col width={2}>Web List card</Col>
        <Col width={8}>
          <LIST_V_2_0_2
            captionLabel="012"
            titleLabel={"Beverage Distribution"}
            card
            mainColor={mainColor}
            onClickList={() => console.log("Clicked List")}
          />
        </Col>
      </Row>
      {/* Save for option select */}
      <h1>List Select</h1>
      <Row>
        <Col width={2}>Option SM</Col>
        <Col width={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              overflowY: "auto",
              maxHeight: "216px",
            }}
          >
            {_.map(option, (el, index) => (
              <LIST_V_2_0_2
                key={index}
                size={"sm"}
                isSelect={true}
                id={el.id}
                titleLabel={el.titleLabel}
                onClickList={(value) => onClickOption(value)}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col width={2}>Option MD</Col>
        <Col width={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              overflowY: "auto",
              maxHeight: "250px",
            }}
          >
            {_.map(option, (el, index) => (
              <LIST_V_2_0_2
                key={index}
                size={"md"}
                isSelect={true}
                id={el.id}
                titleLabel={el.titleLabel}
                onClickList={(value) => onClickOption(value)}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col width={2}>Option LG</Col>
        <Col width={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              overflowY: "auto",
              maxHeight: "304px",
            }}
          >
            {_.map(option, (el, index) => (
              <LIST_V_2_0_2
                key={index}
                size={"lg"}
                isSelect={true}
                id={el.id}
                titleLabel={el.titleLabel}
                onClickList={(value) => onClickOption(value)}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col width={2}>Option Xl</Col>
        <Col width={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              overflowY: "auto",
              maxHeight: "304px",
            }}
          >
            {_.map(option, (el, index) => (
              <LIST_V_2_0_2
                key={index}
                size={"xl"}
                isSelect={true}
                id={el.id}
                titleLabel={el.titleLabel}
                onClickList={(value) => onClickOption(value)}
              />
            ))}
          </div>
        </Col>
      </Row>
      <h1>Multiple Option</h1>
      <Row>
        <Col width={2}>Option sm</Col>
        <Col width={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              overflowY: "auto",
              maxHeight: "254px",
            }}
          >
            {_.map(option, (el, index) => (
              <LIST_V_2_0_2
                key={index}
                size={"sm"}
                isSelect={true}
                id={el.id}
                mainColor={mainColor}
                value={[5, 6, 7]}
                isCheckbox={true}
                titleLabel={el.titleLabel}
                onClickList={(value) => onClickOption(value)}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Table
        pagination={false}
        style={{
          marginTop: 40,
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
        dataSource={listDataPage}
        columns={exampleApiCol}
      />
    </div>
  );
};

export default ListPage;
