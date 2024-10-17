export default function Params(
  { params, searchParams }:
      {
          params: { slug: string },
          searchParams: { [key: string]: string | string[] | undefined }
      }) {
  return (
      <>
          <p>Params: {params.slug}</p>
          <p>QueryString:</p>
          <p>SearchParams: {JSON.stringify(searchParams)}</p>
          <p>Guitar: {Array.isArray(searchParams.guitar) ? searchParams.guitar.join(', ') : searchParams.guitar}</p>
          {searchParams.guitar && typeof searchParams.guitar === 'string'&& (
              <div>
                  <img src={searchParams.guitar} alt="Guitar" />
              </div>
          )}
      </>
  );
}