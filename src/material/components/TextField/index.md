## Example

```jsx
<form noValidate>
    <TextField
      id="name"
      label="Name"
      margin="normal"
    />
    <TextField
      id="uncontrolled"
      label="Uncontrolled"
      defaultValue="foo"
      margin="normal"
    />
    <TextField
      required
      id="required"
      label="Required"
      defaultValue="Hello World"
      margin="normal"
    />
    <TextField
      error
      id="error"
      label="Error"
      defaultValue="Hello World"
      margin="normal"
    />
    <TextField
      id="password"
      label="Password"
      type="password"
      autoComplete="current-password"
      margin="normal"
    />
    <TextField
      id="date"
      label="From date"
      type="date"
      defaultValue="2017-05-24"
    />
    <TextField
      id="multiline-flexible"
      label="Multiline"
      multiline
      rowsMax="4"
      margin="normal"
    />
    <TextField
      id="multiline-static"
      label="Multiline"
      multiline
      rows="4"
      defaultValue="Default Value"
      margin="normal"
    />
    <TextField
      id="helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
      margin="normal"
    />
    <TextField
      label="With placeholder"
      placeholder="Placeholder"
    />
    <TextField
      label="With placeholder multiline"
      placeholder="Placeholder"
      multiline
    />
    <TextField
      id="placeholder"
      label="Label"
      InputProps={{ placeholder: 'Placeholder' }}
      helperText="Full width!"
      fullWidth
      margin="normal"
    />
</form>
```
