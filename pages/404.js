import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>Nothing to see here!</h1>
        <h3 style={{ color: "tomato" }}>
          <strong>404 - Page not found</strong>
        </h3>
      </div>
    </Layout>
  );
};
