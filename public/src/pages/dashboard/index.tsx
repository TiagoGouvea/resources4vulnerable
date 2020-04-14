import React, { useState, useEffect } from 'react';
import { PageHeader, Spin, Collapse, List, Button, Col, Row } from 'antd';
import {
  PageContainer,
  HeaderContainer,
  ActionContainer,
  PanelActionContainer,
  EstablishmentContainer,
  InfoContainer,
  PanelStyle
} from './styles';
import { PlaceStoreItem } from '../../components/placeStoreItem';
import { PlaceStore } from '../../interfaces/placeStore';
import { requestGetPlaceStore } from '../../redux/placeStore/actions';
import { Place } from '../../interfaces/place';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { FamilySearch } from '../../components/familySearch';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

/**
 * Dashboard page component
 * @param props component props
 */
export const DashboardPage: React.FC<{}> = (props) => {
  const dispatch = useDispatch();

  const cityId = process.env.REACT_APP_ENV_CITY_ID as string;

  const placeStoreLoading = useSelector<AppState, boolean>((state) => state.placeStoreReducer.loading);
  const placeStore = useSelector<AppState, [PlaceStore] | null | undefined>((state) => state.placeStoreReducer.item);

  useEffect(() => {
    dispatch(requestGetPlaceStore(cityId));
  }, [cityId, dispatch]);

  return (
    <PageContainer>
      <HeaderContainer>
        <PageHeader title="Consulta" />
        <FamilySearch />
        <ActionContainer>
          <Button href={'#establishment'}>Estabelecimentos</Button>
          <Button href={'#info'}>Saiba mais</Button>
        </ActionContainer>
      </HeaderContainer>

      <EstablishmentContainer id="establishment">
        <PageHeader title="Estabelecimentos" subTitle="Lugares onde é possível consumir os créditos disponíveis." />
        <Spin spinning={placeStoreLoading}>
          {placeStore && (
            <Row gutter={[8, 8]}>
              {placeStore.map((item, index) => (
                <Col key={index} xs={24} sm={24} md={8} lg={8} xl={8}>
                  <PlaceStoreItem {...item} />
                </Col>
              ))}
            </Row>
          )}
        </Spin>
      </EstablishmentContainer>

      <InfoContainer id="info">
        <PageHeader title="Informações de uso" />
        <Collapse bordered={false} style={PanelStyle}>
          <Panel header="Tenho direito ao benefício?" key="1">
            {text}
            <List
              itemLayout="horizontal"
              dataSource={[1, 2, 3, 4, 5]}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta title={'item.title' + index} />
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="Obter mais informações." key="2">
            {text}
            <PanelActionContainer>
              <Button>MailTo</Button>
              <Button type="link" href="https://www.pjf.mg.gov.br/jfcontracoronavirus/index.php">
                pjf.mg.gov.br
              </Button>
            </PanelActionContainer>
          </Panel>
        </Collapse>
      </InfoContainer>
    </PageContainer>
  );
};