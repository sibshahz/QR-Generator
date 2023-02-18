import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-content"
          style={{
            minHeight: '75vh',
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        ©2023 Created by <a href="http://github.com/sibshahz" target="_blank">Syed Shahid Gillani</a>
      </Footer>
    </Layout>
  );
};
export default Home;
