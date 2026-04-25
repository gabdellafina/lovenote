interface ToggleProps {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}

const Toggle = ({ enabled, setEnabled }: ToggleProps) => {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`w-12 h-6 rounded-full p-1 transition ${
        enabled ? "bg-gray-400" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition ${
          enabled ? "translate-x-6" : ""
        }`}
      />
    </button>
  );
};

export default Toggle;