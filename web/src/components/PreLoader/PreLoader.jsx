import React from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

function PreLoader() {
  return (
    <div className="h-screen">
      <div class="grid h-2/3 place-items-center">
      <div class="w-1/3 p-2">
        <div class=" text-center p-2">
          <div className="sweet-loading h-50">
            <HashLoader
              color="#1D4ED8"
              loading={true}
              cssOverride={override}
              size={75}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default PreLoader;
