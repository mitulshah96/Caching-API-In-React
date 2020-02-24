import React from "react";

export default ({ cacheObject }) => (
  <div>
    <p>Query Count: {cacheObject.queryCount}</p>
    <p>Cache Hits: {cacheObject.cacheHits}</p>
    <p>Current Cache:</p>
    <ul>
      {Object.keys(cacheObject.cache).map((cacheItem, i) => (
        <li key={i}>
          [key: {cacheItem}, value:{" "}
          {JSON.stringify(cacheObject.cache[cacheItem])}]
        </li>
      ))}
    </ul>
    <ul>
      {cacheObject.cacheHitsHistory.map((hit, i) => (
        <li>{`Hit ${i}: ${hit}`}</li>
      ))}
    </ul>
  </div>
);
