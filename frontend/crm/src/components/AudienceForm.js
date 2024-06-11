import React, { useState } from 'react';
import { fetchAudience } from '../api';
import '../App.css';  // Import CSS file

const AudienceForm = ({ setAudience }) => {
  const [rules, setRules] = useState([{ field: '', operator: '', value: '', logic: 'AND' }]);

  const handleRuleChange = (index, field, value) => {
    const newRules = [...rules];
    newRules[index][field] = value;
    setRules(newRules);
  };

  const handleAddRule = () => {
    setRules([...rules, { field: '', operator: '', value: '', logic: 'AND' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await fetchAudience(rules);
      setAudience(data.audience);
    } catch (error) {
      console.error('Error fetching audience:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fetch Audience</h2>
      {rules.map((rule, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Field"
            value={rule.field}
            onChange={(e) => handleRuleChange(index, 'field', e.target.value)}
          />
          <input
            type="text"
            placeholder="Operator"
            value={rule.operator}
            onChange={(e) => handleRuleChange(index, 'operator', e.target.value)}
          />
          <input
            type="text"
            placeholder="Value"
            value={rule.value}
            onChange={(e) => handleRuleChange(index, 'value', e.target.value)}
          />
          <select
            value={rule.logic}
            onChange={(e) => handleRuleChange(index, 'logic', e.target.value)}
          >
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </select>
        </div>
      ))}
      <button type="button" onClick={handleAddRule}>Add Rule</button>
      <button type="submit">Fetch Audience</button>
    </form>
  );
};

export default AudienceForm;
