

export default function Page() {
  return (
    <>
      Status of each application is displayed Header<br />

      ecom : Multi tenant website (Set different header to visit different websites)<br />
      csr : Customer care application <br />
      admin : Admin application<br />
      docs : documentation - storybook and api documentation <br />
      api : Edge APIs for different application <br />

      csr:dev: - ready started server on 0.0.0.0:3003, url: http://localhost:3003 <br />
      status:dev: - ready started server on 0.0.0.0:3004, url: http://localhost:3004 <br />
      ecom:dev: - ready started server on 0.0.0.0:8080, url: http://localhost:8080 <br />
      docs:dev: - ready started server on 0.0.0.0:3001, url: http://localhost:3001 <br />
      admin:dev: - ready started server on 0.0.0.0:3002, url: http://localhost:3002 <br />

      Other packages: <br />

      dxm-util : Utils packages <br />
      dxm-ui-component : UI component for each application with design system component <br />



    </>
  );
}
