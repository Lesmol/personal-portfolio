import BlogHeading from "@/components/blog/blogHeading";
import Navbar from "@/components/navbar";

function page() {
  return (
    <div className="container mx-auto max-w-3xl items-center p-4 md:p-0 md:pb-4">
      <Navbar backButton={true} backPath="/blog#excel-mapper" />
      <article className="post-content text-custom-light-grey">
        <BlogHeading
          imgUrl="https://lvmp-v2.s3.af-south-1.amazonaws.com/java-excel-mapper-cover.png"
          title="Breakdown: Mapping any excel file into objects"
          summary="A quick walk through the logic that maps any excel file into objects"
          alt="Custom Java Poster"
        />
        <h1 className="mt-12 mb-2 text-3xl text-white md:text-4xl">
          Introduction
        </h1>
        <p>
          So the idea behind doing this came about when I was interested in
          knowing how the company I work for turn payroll data imported from a
          .csv file and make payments.
          <br />
          <br />
          The concept behind it is simple, instead of making companies enter
          employess 1-by-1 and creating a never ending list of beneficiaries,
          they can simply go to whatever accounting software they use. Export a
          file with all the employee data. Load it up and release a bulk payment
          at once. Simple.
          <br />
          <br />I could've went to the codebase and made sense of it there, but
          I decided to spin up my own project and make it work. To my surprise,
          it was simpler than I thought.
        </p>

        <h3>The Approach</h3>
        <p>
          I don't yet have a use case for this so I didn't want to hard-code a
          strict format the file should align with. With the bulk payment
          feature, you want to have a strict format that clients will stick to
          so it's much simpler to handle and so we don't collect a bunch of data
          we don't need for the payment.
          <br />
          <br />
          With my solution, I wanted it to be fluid so you decide how many
          columns you want and what data you want to map. The only caveat is
          that the header has to be in the first row of the sheet.
          <br />
          <br />
          I have other rules like how I only accept STRING or NUMERIC types and
          I don't accept empty cells. I wrote up the entire service in an hour
          so the logic isn't quite refined just yet.
          <br />
          <br />
          There also 2 approaches I had in mind for how to structure the data, I
          call refer to the as <strong>row-based retrieval</strong> and{" "}
          <strong>column-based retrieval</strong>.
        </p>

        <h4>Row-based Retrieval</h4>
        <p>
          Row-based retrieval is essentially a 2D array a storing the data per
          row
        </p>
        <figure>
          <img
            className="m-0 p-0"
            src="https://lvmp-v2.s3.af-south-1.amazonaws.com/xnapper-row-based.png"
            alt=""
          />
        </figure>

        <h4>Column-based Retrieval</h4>
        <p>
          Column-based retrieval is slightly different to row-based. It would've
          been an array that held a list of Maps with lists as their value
          pairs. The reason I would've done it this way is to separate the
          headers of the columns with the data.
        </p>
        <figure>
          <img
            src="https://lvmp-v2.s3.af-south-1.amazonaws.com/xnapper-column-based.png"
            alt=""
          />
        </figure>

        <h3>The Logic</h3>
        <p>
          I'm going to skip over the lesser important bits and dive into the
          logic that might not come as obvious. In order for me to do this I had
          to make use of the <strong>apache.poi</strong> library which allows us
          to interact with excel files.
          <br />
          <br />
          In the code block below, we are just declaring the variables that will
          be used to store data. The headerRow variable stores the first row in
          the sheet which should be made up of the headers. The headers List is
          going to store the String value of the cells in that header for use
          later. The rows List is essentially the 2D array that makes up how the
          data is stored in the row-based retrieval option as shown in an image
          above.
        </p>
        <pre className="mt-4">
          <code>
            {`Row headerRow = sheet.getRow(0);\nList<String> headers = new ArrayList<>();\nList<List<Object>> rows = new ArrayList<>();`}
          </code>
        </pre>
        <p>
          This next block is shows how to loop through the cells in a row to get
          the string value of a cell. In this case we are getting the values in
          the first row of the sheet which should be the headers and adding them
          to the headers list.
        </p>
        <pre className="mt-4">
          <code>
            {`for (Cell cell : headerRow) {\n\theaders.add(cell.getStringCellValue());\n}`}
          </code>
        </pre>
        <p>
          The code below is the guts of the entire application. We read an Excel
          sheet starting from the second row (the first row contains headers),
          extracts cell values for each column, and store the row's data into a
          list called rows. We handles different cell types and throw custom
          exceptions when we encounter invalid formats.
          <br />
          <br />
          This code is what allows us to extract values from a sheet and create
          objects that will be stored in memory and returned as json to our
          frontend.
        </p>
        <pre className="mt-4">
          <code>
            {`// Loops through the "data" rows in a sheet (row[1] and beyond)
for (int rowCount = 1; rowCount < sheet.getPhysicalNumberOfRows(); rowCount++) {
    Row row = sheet.getRow(rowCount);
    List<Object> rowData = new ArrayList<>();

    // Loops through the cells in a row
    for (int i = 0; i < headers.size(); i++) {
        Cell cell = row.getCell(i);

        if (cell == null) {
            throw new InvalidCellTypeException("Invalid cell format in column %s".formatted(headers.get(rowData.size())));
        }

        switch (cell.getCellType()) {
            case NUMERIC -> rowData.add(cell.getNumericCellValue());
            case STRING -> rowData.add(cell.getStringCellValue());
            case BOOLEAN ->
                    throw new InvalidCellTypeException("Please remove the boolean value in the '%s' column".formatted(headers.get(rowData.size())));
            default ->
                    throw new InvalidCellTypeException("Invalid cell type in the %s column".formatted(headers.get(rowData.size())));
        }
    }
    rows.add(rowData);
}`}
          </code>
        </pre>

        <h2>Conclusion</h2>
        <p>
          <strong>To wrap things up</strong>, this logic is the first interation
          and does a good job at getting the data, throwing exceptions when
          needed (with a detailed response informing us of the column it failing
          at) and parsing the data. The next step will be writing the logic that
          will display the data and allow for manipulation by the user that will
          allow them to view it in whatever sequence they desire.
        </p>
      </article>
    </div>
  );
}

export default page;
