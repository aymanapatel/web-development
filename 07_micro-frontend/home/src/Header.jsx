import React from "react";

export default ({ app }) => (
  <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
    Fidget Spinner
    {/* Breaking scenario: Fidget Spinner with prop: {app.name}  */}
    {/* Green scenario: Fidget Spinner */}
  </div>
);
