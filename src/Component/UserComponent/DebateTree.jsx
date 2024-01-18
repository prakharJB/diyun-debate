import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tree as D3Tree } from "react-d3-tree";
import { useParams } from "react-router-dom";

const DebateTree = () => {
  const [treeData, setTreeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/displaydebate`;
        const responseData = await axios.get(url);
        const debateDetails = responseData?.data?.debate;

        // Assuming debateDetails is already in the nested tree format
        const treeData = [
          {
            name: "Root",
            attributes: {},
            children: debateDetails,
          },
        ];

        setTreeData(treeData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tree data:", error);
        setError("Error fetching tree data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <D3Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 100, y: 100 }}
        collapsible={true}
      />
    </div>
  );
};

export default DebateTree;
