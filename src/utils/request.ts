const requestFactory =
  (method = "GET") =>
  async (interface, data = null) => {
    const url = `https://example.com/api${interface}`;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json", // 根据需要设置合适的 Content-Type
      },
    } as RequestInit;

    if ((method === "PUT" || method === "DELETE") && data) {
      options.body = JSON.stringify(data);
    } else if (data) {
      // 对于其他 HTTP 方法，你可以根据需要修改请求体的格式
      options.body = data;
    }

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 根据实际需要，这里可以根据响应的 Content-Type 来解析数据
      const responseData = await response.json();

      return responseData;
    } catch (error) {
      console.error("Error during fetch:", error.message);
      throw error;
    }
  };

export const getRequest = requestFactory("GET");
export const postRequest = requestFactory("POST");
export const putRequest = requestFactory("PUT");
export const deleteRequest = requestFactory("DELETE");
export const optionsRequest = requestFactory("OPTIONS");
export const patchRequest = requestFactory("PATCH");
