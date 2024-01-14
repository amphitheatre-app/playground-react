import Event from "../utils/Event";

// 后续添加装饰器

class SSE extends Event {
  url: URL | undefined;
  eventSource: EventSource | null | undefined;
  static instance: SSE;

  constructor(endpoint: string = "") {
    if (SSE.instance) {
      return SSE.instance;
    }
    super();
    this.url = new URL(endpoint, window.location.origin);
    this.eventSource = null;
    SSE.instance = this;
  }

  connect() {
    if (!this.url) {
      return;
    }
    this.eventSource = new EventSource(this.url, { withCredentials: true });

    this.eventSource.onopen = () => {
      console.log("SSE connection opened");
    };

    this.eventSource.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      // this.notifySubscribers(eventData);
      this.trigger("update", eventData);
    };

    this.eventSource.onerror = (error) => {
      console.error("SSE error:", error);
      this.eventSource?.close();
    };
  }

  close() {
    if (this.eventSource) {
      this.eventSource.close();
      console.log("SSE connection closed");
    }
  }
}
new SSE("/test");

export default SSE;
