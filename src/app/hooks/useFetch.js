"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(token) {
  const [getData, setData] = useState({
    isloading: false,
    apiData: undefined,
    serverError: null,
    status: null,
  });

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));
        const { data, status } = await axios.get(
          `https://sequioa-api.vercel.app/api/v1/user`,
          { headers: { Authorization: `Bearer ${token}` } },
        );

        if (status === 200) {
          setData((prev) => ({ ...prev, isLoading: false }));
          setData((prev) => ({ ...prev, apiData: data, status: status }));
        }

        // if status!== 200
        setData((prev) => ({ ...prev, isLoading: false }));
      } catch (err) {
        setData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: {
            message: "Session Expired...!",
          },
        }));
      }
    };

    fetchData();
  }, [token]);

  return [getData, setData];
}
