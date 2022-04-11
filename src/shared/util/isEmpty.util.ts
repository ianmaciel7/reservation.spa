export default function isEmpty(obj: object | undefined | null | string) {
  if (obj === "" || obj === null || obj === undefined) return true;
  return Object?.keys(obj)?.length === 0;
}
