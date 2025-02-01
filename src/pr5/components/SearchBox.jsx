export const SearchBox = ({ value, onChange }) => {
    // console.log("value", value)
    return (
      <div>
        <form action="">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
                />
          </form>
      </div>
    );
};
