import moment from "moment";
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByDate, 
    sortByAmount 
} from "../../actions/filtersAction";


////// DATE

test("should generate set START date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

test("should generate set END date action object", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});

//////// TEXT FILTER

test("Should set text filter", () => {
    const action = setTextFilter("HEJ")
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "HEJ"
    })
})

test("Should set text filter with default", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})

/////// SORT

test("Should sort by date", () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})

test("Should sort by amount", () => {
    const action = sortByAmount("amount")
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})