export function extractAuthToken(authorizationHeader?: string) {
  if (!authorizationHeader) {
    return null;
  }

  return authorizationHeader.split(" ")[1];
}
