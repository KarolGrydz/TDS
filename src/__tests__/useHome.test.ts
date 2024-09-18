import { renderHook, waitFor } from "@testing-library/react";
import { useHome } from "pages/Home/hooks";

describe("useHome Hook", () => {
  it("should fetch and set currencies on mount", async () => {
    const { result } = renderHook(() => useHome());

    await waitFor(() => {
      expect(result.current.currencies.length).toBe(161);
      expect(result.current.result).toBe(0);
      expect(result.current.amount).toBe("");
      expect(result.current.isError).toBe(false);
    });
  });

  it("should handle currency conversion", async () => {
    const { result } = renderHook(() => useHome());

    await waitFor(() => {
      // Simulate selecting "EUR" and setting an amount
      result.current.handleChangeSelectFrom({
        target: { value: "USD" },
      } as any);
      result.current.handleChangeSelectTo({
        target: { value: "EUR" },
      } as any);
      result.current.handleChangeAmount({ target: { value: "100" } } as any);

      waitFor(() => {
        expect(result.current.result).toBe(84.5);
        expect(result.current.isError).toBe(false);
      });
    });
  });

  it("should handle API error for getCurrencies", async () => {
    const { result } = renderHook(() => useHome());

    await waitFor(() => {
      result.current.handleChangeSelectFrom({
        target: { value: "ABC" },
      } as any);

      waitFor(() => {
        expect(result.current.isError).toBe(true);
        expect(result.current.currencies.length).toBe(0);
      });
    });
  });
});
