import React from "react";

import { Row, Col } from "antd";

import Breadcrumbs from "../../../layout/components/content/breadcrumbs";
import PageTitle from "../../../layout/components/content/page-title";

export default function CamNang() {
    return (
        <Row gutter={[32, 32]}>
            <Col span={24}>
                <Row gutter={[32, 32]} justify="space-between">
                    <Breadcrumbs breadCrumbParent="Pages" breadCrumbActive="Cẩm nang" />
                </Row>
            </Col>

            <PageTitle
                pageTitle="Cẩm nang"
            />
        </Row>
    );
}
