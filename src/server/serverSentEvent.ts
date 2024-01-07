// sse.js
export type Callback = (eventData: any) => void;

// 后续添加装饰器

class SSE {
  url: URL | undefined;
  eventSource: EventSource | null | undefined;
  subscribers: Callback[] = [];
  static instance: null;
  constructor(endpoint: string = "") {
    if (SSE.instance) {
      return SSE.instance;
    }

    this.url = new URL(endpoint, window.location.origin);
    this.eventSource = null;
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
      this.notifySubscribers(eventData);
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

  subscribe(callback: Callback) {
    this.subscribers = this.subscribers || [];
    this.subscribers.push(callback);
  }

  unsubscribe(callback: Callback) {
    if (this.subscribers) {
      this.subscribers = this.subscribers.filter(
        (subscriber) => subscriber !== callback
      );
    }
  }

  notifySubscribers(data: any) {
    if (this.subscribers) {
      this.subscribers.forEach((callback) => callback(data));
    }
  }
}
new SSE("/test");

export default SSE;
