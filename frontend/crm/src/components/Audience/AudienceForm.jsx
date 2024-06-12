import React, { useState } from "react";
import "./audienceForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AudienceForm() {

  const navigate = useNavigate()
  const [rules, setRules] = useState([
    { field: "totalSpends", operator: ">", value: 0, logic: "AND" },
  ]);
  const [size, setSize] = useState(0);
  const [isSizeVisible, setIsSizeVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [audience, setAudience] = useState([]);

  const addRule = () => {
    setRules([...rules, { field: "", operator: "", value: 0, logic: "AND" }]);
  };

  const handleRuleChange = (index, field, value) => {
  let newOperator = rules[index].operator;
  if (field === "field") {
    // Reset operator to default when changing the field
    newOperator = ">";
  }
  const newRules = rules.map((rule, i) =>
    i === index ? { ...rule, [field]: field === "value" ? parseFloat(value) : value, operator: newOperator } : rule
  );
  setRules(newRules);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ rules });
      await axios
        .post("http://localhost:5000/api/audience", { rules })
        .then((res) => {
          setSize(res.data.size);
          setAudience(res.data.audience);
          setIsSizeVisible(true);
        });
    } catch (error) {
      console.error(error);
      alert("Error creating audience");
    }
  };

  const handleSendCampaign = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/campaign/sendCampaign",
        {
          audience: audience,
          size: size,
          message: message,
        }
      );
      alert("Campaign sent successfully");
      navigate("/campaign" , {state: {audience}})
      console.log(audience)
    } catch (error) {
      console.error("Error sending campaign:", error);
      alert("Failed to send campaign");
    }
  };

 
  return (
    <div className="aud h-screen">
      <div className="App ">
        <h1 className="text-2xl font-bold text-white">Create Audience</h1>
        <form onSubmit={handleSubmit}>
          {rules.map((rule, index) => (
            <div className=" space-x-2" key={index}>
              <select
                value={rule.field}
                onChange={(e) =>
                  handleRuleChange(index, "field", e.target.value)
                }
              >
                <option value="totalSpends">Total Spends</option>
                <option value="visits">Max Visits</option>
                <option value="lastVisit">Last Visit</option>
              </select>
              <select
                value={rule.operator}
                onChange={(e) =>
                  handleRuleChange(index, "operator", e.target.value)
                }
              >
                <option value=">">{">"}</option>
                <option value="<">{"<"}</option>
                <option value="=">=</option>
              </select>
              <input
                className="h-6"
                type="number"
                value={rule.value}
                onChange={(e) =>
                  handleRuleChange(index, "value", parseFloat(e.target.value))
                }
              />
              {index !== 0 && (
                <select
                  value={rule.logic}
                  onChange={(e) =>
                    handleRuleChange(index, "logic", e.target.value)
                  }
                >
                  <option value="AND">AND</option>
                  <option value="OR">OR</option>
                </select>
              )}
            </div>
          ))}
          <button className="bg-blue-500 " type="button" onClick={addRule}>
            <div className="m-1  text-white">Add Rule</div>
          </button>
          <button className="h-8" id="checkBtn" type="submit">
            Check Audience Size
          </button>
        </form>

        {isSizeVisible ? (
          <>
            <div className="flex-col">
              <div
                className=" ml-5 *flex  bg-white rounded-md text-center  text-blue-600"
                style={{ width: 830 }}
              >
                Audience Size: {size}
              </div>
              <div className="flex justify-center">
                <form onSubmit={handleSendCampaign}>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter campaign message"
                    className="w-full p-2 mt-2"
                  />
                  <button
                    type="submit"
                    className="mt-2 p-2 bg-blue-600 text-white rounded"
                    
                  >
                    Send Campaign
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default AudienceForm;